import MessageForm from '../MessageForm';
import MessageHeader from '../MessageHeader/messageHeader';
import {TBlock} from '../../../../shared/types';

export type ContentProps = {
  showMessage: string;
  showEmpty: string;
  messageHeader: MessageHeader;
  messageList:TBlock;
  messageForm: MessageForm;
}
