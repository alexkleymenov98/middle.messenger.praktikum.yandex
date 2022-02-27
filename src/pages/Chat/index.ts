import Chat from './chat';
import {connect} from '../../modules/Store/connect';
import {TStore} from '../../modules/Store/types';

export default connect(
    Chat,
    (state:TStore) => state.user);
