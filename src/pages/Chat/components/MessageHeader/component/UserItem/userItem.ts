import Block from '../../../../../../modules/Block';
// @ts-ignore
import template from './template.pug';
import {TRenderElement} from '../../../../../../modules/Block/types';
import {UserItemProps} from './types';
import {getActiveChat} from '../../../../../../modules/Store/actions';
import ChatsServices from '../../../../../../services/chatsServices';

class UserItem extends Block<Partial<UserItemProps>> {
  constructor(props: Partial<UserItemProps>) {
    super({
      ...props, events: {
        click: (event: Event) => this.onClick(event),
      },
    });
  }

  onClick({target}: Event): void {
    // @ts-ignore
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
