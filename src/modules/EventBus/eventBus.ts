import {IEventBus} from './types';
import {componentCycleValue} from './types';

class EventBus implements IEventBus<componentCycleValue, Function> {
  listeners;
  constructor() {
    this.listeners = {} as IEventBus<componentCycleValue, Function>['listeners'];
  }
  on(event: componentCycleValue, callback: Function):void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }
  off(event: componentCycleValue, callback: Function):void {
    if (!this.listeners[event]) {
      throw Error('event not found');
    }
    this.listeners[event] = this.listeners[event].filter((listener)=>listener !== callback);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  emit(event: componentCycleValue, ...args:any):void {
    if (!this.listeners[event]) {
      throw Error('event not found');
    }
    this.listeners[event].forEach((func)=>func(...args));
  }
}

export default EventBus;
