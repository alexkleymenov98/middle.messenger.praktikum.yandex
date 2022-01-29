import Block from '../../modules/Block';
import {ErrorPageProps} from './types';
import {template} from './template';
import {TRenderElement} from '../../modules/Block/types';

class Errors extends Block<ErrorPageProps> {
  constructor(props:ErrorPageProps) {
    super(props);
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}

export default Errors;
