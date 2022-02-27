import Block from '../Block';
import Store from './store';
import {StoreEvents} from './enums';
import {BlockProps} from '../Block/types';
import {TStore} from './types';

export function connect(Component: typeof Block, mapStateToProps:(state:TStore)=>TStore) {
  return class extends Component {
    constructor(props: BlockProps) {
      super({...props, ...mapStateToProps(Store.getState())});
      Store.on(StoreEvents.Updated, ()=>{
        this.setProps({...mapStateToProps(Store.getState())});
      });
    }
  };
}
