import Block from '../../../../modules/Block';
import {MessageProps} from './types';
import {TRenderElement} from '../../../../modules/Block/types';
const template = require('./template.pug');

class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super(props);
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default Message;
