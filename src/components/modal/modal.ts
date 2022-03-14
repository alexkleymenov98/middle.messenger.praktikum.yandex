import Block from '../../modules/Block';
import {TRenderElement} from '../../modules/Block/types';
import {ModalProps} from './types';
import {hideModal} from '../../modules/Store/actions';
const template = require('./template.pug');

class Modal extends Block {
  constructor(props: ModalProps) {
    super({
      events: {
        click: (event) => this.onClickBackground(event),
      }, ...props,
    }, 'div', 'modal-wrapper');
  }

  componentDidUpdate(): Promise<void> | undefined {
    if (this.props.isShow) {
      if (this.props.typeModal === this.props.type) {
        this.show();
        return;
      }
      this.hide();
    }
  }


  onClickBackground({target}: Event): void {
    // @ts-ignore
    if (target?.className === 'modal-wrapper') {
      hideModal();
    }
  }


  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default Modal;
