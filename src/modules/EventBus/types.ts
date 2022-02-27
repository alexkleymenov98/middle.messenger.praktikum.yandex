export type componentCycleKey = 'INIT' |'FLOW_CDM'|'FLOW_RENDER' | 'FLOW_CDU';
export type componentCycleValue =
  'init'
  |'flow:component-did-mount'
  |'flow:render'
  | 'flow:component-did-update';

export interface IEventBus<E extends string, T extends Function> {
  listeners:Record<E, T[]>;
  on(event:E, callback:T):void;
  off(event:E, callback:T):void;
  emit(event:E, ...args:any):void;
}
