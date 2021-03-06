import EventBus from '../EventBus';
import {BlockEntryProps, BlockProps, TRenderElement} from './types';
import {componentCycleKey, componentCycleValue} from '../EventBus/types';
import makeUUID from '../../utils/makeUUID';

export default abstract class Block<T extends BlockProps = BlockProps> {
  private static EVENTS: Record<componentCycleKey, componentCycleValue> = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private _element: HTMLElement | null;

  private _meta: Record<string, unknown>;

  props: T;

  eventBus: EventBus;

  private _id: string;
  private _children: BlockEntryProps['children'] = {};

  constructor(propsAndChildren: T, tagName = 'div', className = '') {
    const {children, props} = this._getChildren(propsAndChildren);

    // @ts-ignore
    this._children = this._makePropsProxy(children);

    this._meta = {
      className,
      tagName,
      props,
    };
    this._id = makeUUID();

    // @ts-ignore
    this.props = this._makePropsProxy({...props, _id: this._id});

    this.eventBus = new EventBus();

    this._registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
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

  init(): void {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
    Object.values(this.getChildren()).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((innerChild: any) => {
          if (innerChild.dispatchComponentDidMount) innerChild.dispatchComponentDidMount();
        });
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  componentDidMount(): void {
    return;
  }

  dispatchComponentDidMount(): void {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  componentDidUpdate(): void {
  }

  shouldComponentUpdate(oldProps: T, newProps: T): boolean {
    return JSON.stringify(oldProps) !== JSON.stringify(newProps);
  }

  private _componentDidUpdate(oldProps: T, newProps: T): void {
    const response = this.shouldComponentUpdate(oldProps, newProps);
    if (response) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
      this.componentDidUpdate();
    }
  }

  _getChildren(propsAndChildren: T): BlockEntryProps {
    const children: BlockEntryProps['children'] = {};
    const props: BlockEntryProps['props'] = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block || Array.isArray(value)) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });
    return {children, props};
  }

  getChildren(): BlockEntryProps['children'] {
    return this._children;
  }

  compile(template: string, props: T): DocumentFragment {
    const propsAndStubs: T = {...props};

    Object.entries(this.getChildren()).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        child.forEach((innerChild: any) => {
          if (!propsAndStubs[key]) {
            // @ts-ignore
            propsAndStubs[key] = [];
          }
          propsAndStubs[key].push(
              `<div data-id="${innerChild.getId()}"></div>`,
          );
        });
      } else {
        // @ts-ignore
        propsAndStubs[key] = `<div data-id="${child.getId()}"></div>`;
      }
    });

    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

    // @ts-ignore
    fragment.innerHTML = template(propsAndStubs);

    Object.values(this.getChildren()).forEach((child) => {
      const childProps = child as Block;
      if (Array.isArray(childProps)) {
        childProps.forEach((innerChild: any) => {
          const stub = fragment.content.querySelector(`[data-id="${innerChild.getId()}"]`);
          (stub as HTMLElement).replaceWith(
            innerChild.getContent ? innerChild.getContent() : innerChild,
          );
        });
      } else {
        const stub = fragment.content.querySelector(`[data-id="${childProps.getId()}"]`);
        stub?.replaceWith(childProps.getContent());
      }
    });
    return fragment.content;
  }

  setProps = (nextProps: T): void => {
    if (!nextProps) {
      return;
    }
    const {children, props} = this._getChildren(nextProps);

    if (Object.values(children).length) {
      Object.assign(this._children, children);
    }

    if (Object.values(props).length) {
      Object.assign(this.props, props);
    }
  };

  get element(): HTMLElement {
    return this._element as HTMLElement;
  }

  private _render(): void {
    const block = this.render(); // render ???????????? ???????????????????? DocumentFragment;

    if (!this._element) {
      this._element = this._createDocumentElement('div');
    }
    this._removeEvents();
    // @ts-ignore
    this._element.innerHTML = ''; // ?????????????? ???????????????????? ????????????????????

    // @ts-ignore
    this._element?.append(block);

    this._element?.setAttribute('data-id', this._id);
    this._addEvents();
  }

  render(): TRenderElement {
    return this._element as TRenderElement;
  }

  getContent(): HTMLElement {
    return this.element as HTMLElement;
  }

  private _makePropsProxy(props: T) {
    return new Proxy(props, {
      get(target, prop: string) {
        // @ts-ignore
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop, value: unknown) => {
        const oldTarget = {...target};
        // @ts-ignore
        target[prop] = value;
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('?????? ??????????????');
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

  show(): void {
    this.getContent().style.display = 'block';
  }

  hide(): void {
    this.getContent().style.display = 'none';
  }

  private _addEvents(): void {
    const {events = {}} = this.props;
    Object.keys(events).forEach((eventName: keyof GlobalEventHandlersEventMap) => {
      this._element?.addEventListener(eventName, events[eventName] as (e: Event) => void);
    });
  }

  private _removeEvents(): void {
    const {events = {}} = this.props;

    Object.keys(events).forEach((eventName: keyof GlobalEventHandlersEventMap) => {
      this._element?.removeEventListener(eventName, events[eventName] as (e: Event) => void);
    });
  }

  getId(): string {
    return this._id;
  }
}
