import Modal from './modal';
import {connect} from '../../modules/Store/connect';

export default connect(Modal, ({modal}) => modal);
