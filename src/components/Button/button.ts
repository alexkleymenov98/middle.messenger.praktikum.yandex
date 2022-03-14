import Block from '../../modules/Block';
import {ButtonProps} from './types';
import {TRenderElement} from '../../modules/Block/types';
const template = require('./template.pug');

class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default Button;
