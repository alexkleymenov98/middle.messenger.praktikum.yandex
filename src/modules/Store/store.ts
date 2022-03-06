import set from '../../utils/set';
import EventBus from '../EventBus';
import {StoreEvents} from './enums';
import {TStore} from './types';

class Store extends EventBus<StoreEvents> {
  constructor() {
    super();
    this.on(StoreEvents.Updated, () => {
    });
  }

  private state: TStore = {
    chats: [],
    errorTextForm: '',
    user: null,
    activeChat: null,
    modal: {
      type: null,
      isShow: false,
    },
  };

  getState(): TStore {
    return this.state;
  }

  set(path: string, value: unknown): void {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
