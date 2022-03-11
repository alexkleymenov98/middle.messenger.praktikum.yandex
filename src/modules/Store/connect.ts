import Store from './index';
import {StoreEvents} from './enums';
import {BlockProps} from '../Block/types';
import {TStore} from './types';
import {Indexed, TBlockConnect} from '../../shared/types';

export function connect(Component: TBlockConnect, mapStateToProps: (state: TStore) => Indexed) {
  return class extends Component {
    constructor(props: BlockProps) {
      super({...props, ...mapStateToProps(Store.getState())});
      Store.on(StoreEvents.Updated, () => {
        this.setProps({...mapStateToProps(Store.getState())});
      });
    }
  };
}
