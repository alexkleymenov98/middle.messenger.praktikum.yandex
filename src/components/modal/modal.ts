import Block from '../../modules/Block';
import template from './template.pug';
import {TRenderElement} from '../../modules/Block/types';
import {ModalProps} from './types';

class Modal extends Block<ModalProps> {
  constructor(props:ModalProps) {
    super(props, 'div', 'modal-wrapper');
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}
export default Modal;
