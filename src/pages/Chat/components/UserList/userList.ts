import Block from '../../../../modules/Block';
import {UserListProps} from './types';
import {template} from './template';
import {TRenderElement} from '../../../../modules/Block/types';

class UserList extends Block<UserListProps> {
  constructor(props:UserListProps) {
    super(props);
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}
export default UserList;
