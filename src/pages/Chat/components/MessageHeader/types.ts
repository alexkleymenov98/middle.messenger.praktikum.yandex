import {ChatUser} from '../../../../api/chat/types';
import Button from '../../../../components/Button';
import Modal from '../../../../components/modal';

export type MessageHeaderProps = {
  userList: ChatUser[] | null;
  button: Button;
  modal: Modal;
}
