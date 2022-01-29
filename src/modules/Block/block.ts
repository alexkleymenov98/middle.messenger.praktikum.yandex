import {v4 as makeUUID} from 'uuid';
import EventBus from '../EventBus';
import {BlockEntryProps, BlockProps, TRenderElement} from './types';
import {componentCircleKey, componentCircleValue} from '../EventBus/types';
import {render} from 'pug';

export default abstract class Block<T extends BlockProps> {
  private static EVENTS:Record<componentCircleKey, componentCircleValue> = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private _element: HTMLElement | null;

  private _meta: Record<string, unknown>;

  props: T;

  eventBus: () => EventBus;

  private _id: string;
  private _children:BlockEntryProps['children'] ={
  };

  constructor(propsAndChildren: T, tagName = 'div', className = '') {
    const eventBus = new EventBus();

    const {children, props} = this._getChildren(propsAndChildren);

    this._children = children;

    this._meta = {
      className,
      tagName,
      props,
    };
    this._id = makeUUID();

    // @ts-ignore
    this.props = this._makePropsProxy({...props, _id: this._id});

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    const {tagName} = this._meta;
    this._element = this._createDocumentElement(tagName as string);
  }

  init():void {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount():void {
    this._addEvents();
    this.componentDidMount();
  }

  componentDidMount():void {
    return;
  }

  dispatchComponentDidMount():void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }
  componentDidUpdate(oldProps: T, newProps: T):boolean {
    return JSON.stringify(oldProps) !== JSON.stringify(newProps);
  }

  private _componentDidUpdate(oldProps: T, newProps: T):void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this._render();
    }
  }

  _getChildren(propsAndChildren:T):BlockEntryProps {
    const children:BlockEntryProps['children'] = {};
    const props:BlockEntryProps['props'] = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        children[key] = [];
        value.forEach((item)=>{
          if (item instanceof Block && Array.isArray(children[key])) {
            // @ts-ignore
            children[key].push(item);
          }
        });
      } else if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });
    return {children, props};
  }

  getChildren():BlockEntryProps['children'] {
    return this._children;
  }

  compile(template:string, props:T):DocumentFragment {
    const propsAndStubs:T = {...props};

    Object.entries(this.getChildren()).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        child.forEach((itemChild)=>{
          // @ts-ignore
          propsAndStubs[key] = `${propsAndStubs[key] ?? ''}<div data-id="${itemChild.getId()}"></div>`;
        });
      } else {
        // @ts-ignore
        propsAndStubs[key] = `<div data-id="${child.getId()}"></div>`;
      }
    });

    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

    fragment.innerHTML = render(template, propsAndStubs);

    Object.values(this.getChildren()).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((itemChild)=>{
          const stub = fragment.content.querySelector(`[data-id="${itemChild.getId()}"]`);
          stub?.replaceWith(itemChild.getContent());
        });
      } else {
        const childProps = child as Block<any>;
        const stub = fragment.content.querySelector(`[data-id="${childProps.getId()}"]`);
        stub?.replaceWith(childProps.getContent());
      }
    });

    return fragment.content;
  }

  setProps = (nextProps: T):void => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  get element():HTMLElement {
    return this._element as HTMLElement;
  }

  private _render():void {
    const block = this.render(); // render теперь возвращает DocumentFragment

    this._removeEvents();
    // @ts-ignore
    this._element.innerHTML = ''; // удаляем предыдущее содержимое

    // @ts-ignore
    this._element.appendChild(block);

    this._element?.setAttribute('data-id', this._id);

    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  render(): TRenderElement {
    return this._element as TRenderElement;
  }

  getContent():HTMLElement {
    return this.element as HTMLElement;
  }

  private _makePropsProxy(props: T) {
    return new Proxy(props, {
      get(target, prop:string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop, value: unknown) => {
        const oldTarget = {...target};
        // @ts-ignore
        target[prop] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  private _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    const {className} = this._meta;
    if (className && typeof className === 'string') {
      element.classList.add(className);
    }
    element.setAttribute('data-id', this._id);
    return element;
  }

  show():void {
    this.getContent().style.display = 'block';
  }

  hide():void {
    this.getContent().style.display = 'none';
  }

  private _addEvents():void {
    const {events = {}} = this.props;
    Object.keys(events).forEach((eventName:keyof GlobalEventHandlersEventMap) => {
      this._element?.addEventListener(eventName, events[eventName] as (e: Event) => void);
    });
  }

  private _removeEvents():void {
    const {events = {}} = this.props;

    Object.keys(events).forEach((eventName: keyof GlobalEventHandlersEventMap) => {
      this._element?.removeEventListener(eventName, events[eventName] as (e: Event) => void);
    });
  }

  getId():string {
    return this._id;
  }
}
