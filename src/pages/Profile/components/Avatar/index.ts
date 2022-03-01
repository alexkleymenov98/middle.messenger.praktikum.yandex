import Avatar from './avatar';
import {connect} from '../../../../modules/Store/connect';

export default connect(Avatar, ({user})=>{
  if (!user || !user.avatar) {
    return {
      avatarLink: '',
    };
  }
  return {
    avatarLink: `https://ya-praktikum.tech/api/v2/resources${user.avatar}`,
  };
});
