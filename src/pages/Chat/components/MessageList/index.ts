import {connect} from '../../../../modules/Store/connect';
import MessageList from './messageList';
import Message from '../Message';
import {getTime} from '../../../../utils/getTime';

export default connect(MessageList, ({activeChat, user})=>{
  if (!activeChat || !activeChat.messageList || !user) {
    return {
      messages: null,
    };
  }
  return {
    messages: activeChat.messageList
        .sort((a, b)=>a.id < b.id ? 1:-1)
        .map(({content, time, user_id})=>
          new Message(
              {
                type: user_id === user.id ?'dialog-message-your' :'dialog-message-friend',
                content,
                time: getTime(time),
              })),
  };
});
