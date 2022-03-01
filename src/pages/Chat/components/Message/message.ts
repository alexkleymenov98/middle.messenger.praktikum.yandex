import Block from '../../../../modules/Block';
import {MessageProps} from './types';
import {TRenderElement} from '../../../../modules/Block/types';
import template from './template';

class Message extends Block<MessageProps> {
  constructor(props:MessageProps) {
    super(props);
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}
export default Message;
