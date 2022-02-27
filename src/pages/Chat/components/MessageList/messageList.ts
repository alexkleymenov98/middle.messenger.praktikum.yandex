import Block from '../../../../modules/Block';
import {MessageListProps} from './types';
import {TRenderElement} from '../../../../modules/Block/types';
import template from './template.pug';
import ChatsServices from '../../../../services/chatsServices';

class MessageList extends Block<MessageListProps> {
  constructor(props:MessageListProps) {
    new ChatsServices().getChats();
    super(props, 'div', 'message-container__list');
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}
export default MessageList;
