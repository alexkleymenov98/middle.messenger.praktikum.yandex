import MessageForm from '../MessageForm';
import MessageList from '../MessageList';
import MessageHeader from '../MessageHeader/messageHeader';

export type ContentProps = {
  showMessage:string;
  showEmpty: string;
  messageHeader: MessageHeader;
  messageList: MessageList;
  messageForm: MessageForm;
}
