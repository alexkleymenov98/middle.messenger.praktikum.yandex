import UserList from './components/UserList';
import Content from './components/Content';
import Link from '../../components/Link';
import {BlockProps} from '../../modules/Block/types';
import Modal from '../../components/modal/modal';

export type ChatProps = BlockProps & {
  modal: Modal;
  userList: UserList;
  linkProfile: Link;
  content: Content;
}
