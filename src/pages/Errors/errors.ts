import Block from '../../modules/Block';
import {ErrorPageProps} from './types';
import template from './template.pug';
import {TRenderElement} from '../../modules/Block/types';

class Errors extends Block<ErrorPageProps> {
  constructor(props: ErrorPageProps) {
    super(props);
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default Errors;
