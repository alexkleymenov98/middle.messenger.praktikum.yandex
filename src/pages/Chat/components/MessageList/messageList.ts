import Block from '../../../../modules/Block';
import {MessageListProps} from './types';
import {TRenderElement} from '../../../../modules/Block/types';
const template = require('./template.pug');

class MessageList extends Block {
  constructor(props: MessageListProps) {
    super(props, 'div', 'message-container__list');
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default MessageList;
