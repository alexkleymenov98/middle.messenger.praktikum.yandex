import Block from '../../modules/Block';
import {ErrorPageProps} from './types';
import {TRenderElement} from '../../modules/Block/types';
const template = require('./template.pug');

class Errors extends Block<ErrorPageProps> {
  constructor(props: ErrorPageProps) {
    super(props);
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default Errors;
