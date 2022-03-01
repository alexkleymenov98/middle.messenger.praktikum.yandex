import {connect} from '../../../../modules/Store/connect';
import ChatsList from './ChatsList';
import ChatItem from '../ChatItem/chatItem';
import {getTime} from '../../../../utils/getTime';

export default connect(
    ChatsList,
    ({chats}) => ({
      chats: !chats.length ? null :
      chats
          .map((
              {
                id,
                title,
                last_message,
                unread_count,
              }) =>
            new ChatItem(
                {
                  chatId: id,
                  title,
                  time: last_message?.time ? getTime(last_message.time): '',
                  last_message: last_message?.content ?? '',
                  unread_count: unread_count ? `${unread_count}` : '',
                },
            )),
    }));

