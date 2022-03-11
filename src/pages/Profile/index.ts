import Profile from './profile';
import {connect} from '../../modules/Store/connect';

export default connect(Profile, ({user})=> user ?? {user: null});
