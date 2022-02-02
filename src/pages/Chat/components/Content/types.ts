import MessageForm from '../MessageForm';
import MessageHeader from '../MessageHeader/messageHeader';
import MessageList from '../MessageList';

export type ContentProps = {
  isEmpty: boolean;
  messageHeader: MessageHeader;
  messageList: MessageList;
  messageForm: MessageForm;
}
