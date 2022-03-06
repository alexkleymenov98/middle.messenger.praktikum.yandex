import Block from '../../../../../../modules/Block';
import template from './template.pug';
import {TRenderElement} from '../../../../../../modules/Block/types';
import {UserItemProps} from './types';
import {getActiveChat} from '../../../../../../modules/Store/actions';
import ChatsServices from '../../../../../../services/chatsServices';

class UserItem extends Block<Partial<UserItemProps>> {
  constructor(props: Partial<UserItemProps>) {
    super({
      ...props, events: {
        click: (event) => this.onClick(event),
      },
    });
  }

  onClick({target}: Event): void {
    if (target?.className === 'close') {
      const chat = getActiveChat();
      if (chat?.chatId && this.props.id && this.props.role !== 'admin') {
        ChatsServices.deleteUserFromChat({users: [this.props.id], chatId: chat.chatId});
      }
    }
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default UserItem;
