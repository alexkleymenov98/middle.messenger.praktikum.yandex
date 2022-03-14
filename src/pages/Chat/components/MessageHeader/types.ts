import {ChatUser} from '../../../../api/chat/types';
import Button from '../../../../components/Button';
import {TBlock} from '../../../../shared/types';

export type MessageHeaderProps = {
  userList: ChatUser[];
  button: Button;
  modal: TBlock;
}
