import Block from '../../../../modules/Block';
import {MessageHeaderProps} from './types';
import {TRenderElement} from '../../../../modules/Block/types';
import {template} from './template';

class MessageHeader extends Block<MessageHeaderProps> {
  constructor(props:MessageHeaderProps) {
    super(props, 'div', 'message-container__header');
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}
export default MessageHeader;
