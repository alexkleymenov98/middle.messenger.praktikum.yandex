import {v4 as makeUUID} from 'uuid';
import EventBus from '../EventBus';
import {componentCircleKey, componentCircleValue} from '../EventBus/types';

class Block<T extends object> {
  static EVENTS:Record<componentCircleKey, componentCircleValue> = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_UPDATE: 'flow:component-did-update',
  };

  private _element:null | HTMLElement = null;
  private _meta:null | {tagName:keyof HTMLElementTagNameMap, props:T} = null;
  eventBus:()=>EventBus;
  props:T;
  _id:null | string = null;

  constructor(tagName:keyof HTMLElementTagNameMap = 'div', props = {} as T) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._id = makeUUID();

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus:EventBus):void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_UPDATE, this._componentDidUpdate.bind(this));
  }

  private _createResources():void {
    if (this._meta) {
      const {tagName} = this._meta;
      this._element = this._createDocumentElement(tagName);
    }
  }

  init():void {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount():void {
    this.componentDidMount();
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount():void {
    return;
  }

  dispatchComponentDidMount():void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps:T, newProps:T):void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this._render();
    }
  }

  componentDidUpdate(oldProps:T, newProps:T):boolean {
    return JSON.stringify(oldProps) !== JSON.stringify(newProps);
  }

  setProps = (nextProps:T):void => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  get element():HTMLElement|null {
    return this._element;
  }

  _render():void {
    const block = this.render();

    if (!this._element) {
      return;
    }
    // @ts-ignore
    this._element.innerHTML = block;
    this._addEvents();
  }

  render():void {
    return;
  }

  getContent():HTMLElement | null {
    return this.element;
  }

  private _makePropsProxy(props:T) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;
    return new Proxy(props, {
      get(target, prop) {
        // @ts-ignore
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) :value;
      },
      set(target, prop, value) {
        // @ts-ignore
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_UPDATE, {...target}, target);
        return true;
      },
      deleteProperty() {
        throw Error('Нет прав');
      },
    });
  }

  private _createDocumentElement(tagName:keyof HTMLElementTagNameMap):HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id as string);
    return element;
  }

  show():void {
    const element = this.getContent();
    if (!element) {
      return;
    }
    element.style.display = 'block';
  }

  hide():void {
    const element = this.getContent();
    if (!element) {
      return;
    }
    element.style.display = 'none';
  }

  _addEvents() {
    // @ts-ignore
    const {events = {}} = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }
}

export default Block;
