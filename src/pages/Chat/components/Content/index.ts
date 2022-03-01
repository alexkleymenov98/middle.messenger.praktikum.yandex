import Content from './content';
import {connect} from '../../../../modules/Store/connect';

export default connect(Content, ({activeChat}) => {
  if (!activeChat) {
    return {
      showMessage: 'hidden',
      showEmpty: '',
    };
  }
  return {
    showMessage: '',
    showEmpty: 'hidden',
  };
});
