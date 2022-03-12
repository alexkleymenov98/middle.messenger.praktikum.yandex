import Block from '../../../../modules/Block';
import {ChatsListProps} from './types';
import {TRenderElement} from '../../../../modules/Block/types';
const template = require('./template.pug');

class ChatsList extends Block {
  constructor(props: ChatsListProps) {
    super(props);
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default ChatsList;
