import Block from '../../../../modules/Block';
import {ChatsListProps} from './types';
import template from './template.pug';
import {TRenderElement} from '../../../../modules/Block/types';

class ChatsList extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    super(props);
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default ChatsList;
