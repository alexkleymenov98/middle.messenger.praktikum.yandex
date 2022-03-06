import {connect} from '../../modules/Store/connect';
import ChangeProfile from './changeProfile';

export default connect(ChangeProfile, ({user}) => user);
