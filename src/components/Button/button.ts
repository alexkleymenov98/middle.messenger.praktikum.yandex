import Block from '../../modules/Block';
import {ButtonProps} from './types';
import template from './template.pug';
import {TRenderElement} from '../../modules/Block/types';

class Button extends Block<ButtonProps> {
  constructor(props:ButtonProps) {
    super(props);
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}
export default Button;
