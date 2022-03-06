class EventBus<T extends string = string> {
  listeners;

  constructor() {
    this.listeners = {} as Record<T, Function[]>;
  }

  on(event: T, callback: Function): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: T, callback: Function): void {
    if (!this.listeners[event]) {
      throw Error('event not found');
    }
    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  emit(event: T, ...args: any): void {
    if (!this.listeners[event]) {
      throw Error('event not found');
    }
    this.listeners[event].forEach((func) => func(...args));
  }
}

export default EventBus;
