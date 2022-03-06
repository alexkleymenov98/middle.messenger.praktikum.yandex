import MessageHeader from './messageHeader';
import {connect} from '../../../../modules/Store/connect';
import UserItem from './component/UserItem';

export default connect(MessageHeader, ({activeChat}) => {
  if (!activeChat || !activeChat.users.length) {
    return {
      userList: null,
    };
  }
  return {
    userList: activeChat.users.map(({login, id, role}) => new UserItem({login, id, role})),
  };
});
