import Form from './form';
import {connect} from '../../modules/Store/connect';

export default connect(
    Form,
    ({errorTextForm}) => ({errorTextForm})
);
