import {IEventBus} from './types';
import {componentCircleValue} from './types';

class EventBus implements IEventBus<componentCircleValue, Function> {
  listeners;
  constructor() {
    this.listeners = {} as IEventBus<componentCircleValue, Function>['listeners'];
  }
  on(event:componentCircleValue, callback: Function):void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }
  off(event: componentCircleValue, callback: Function):void {
    if (!this.listeners[event]) {
      throw Error('event not found');
    }
    this.listeners[event] = this.listeners[event].filter((listener)=>listener !== callback);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  emit(event:componentCircleValue, ...args:any):void {
    if (!this.listeners[event]) {
      throw Error('event not found');
    }
    this.listeners[event].forEach((func)=>func(...args));
  }
}

export default EventBus;
