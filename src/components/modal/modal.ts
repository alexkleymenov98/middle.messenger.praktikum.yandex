import Block from '../../modules/Block';
import template from './template.pug';
import {TRenderElement} from '../../modules/Block/types';
import {ModalProps} from './types';
import {hideModal} from '../../modules/Store/actions';

class Modal extends Block<ModalProps> {
  constructor(props: ModalProps) {
    super({
      events: {
        click: (event) => this.onClickBackground(event),
      }, ...props,
    }
    , 'div', 'modal-wrapper');
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
    if (target?.className === 'modal-wrapper') {
      hideModal();
    }
  }


  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default Modal;
