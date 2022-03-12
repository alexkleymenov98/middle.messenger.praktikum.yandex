import {connect} from '../../../../modules/Store/connect';
import MessageList from './messageList';
import Message from '../Message';
import {getTime} from '../../../../utils/getTime';

export default connect(MessageList, ({activeChat, user}) => {
  if (!activeChat || !activeChat.messageList || !user) {
    return {
      messages: [],
    };
  }
  return {
    messages: activeChat.messageList
        .map(({content, time, user_id}) =>
          new Message(
              {
                type: user_id === user.id ? 'dialog-message-your' : 'dialog-message-friend',
                content,
                time: getTime(time),
              })),
  };
});
