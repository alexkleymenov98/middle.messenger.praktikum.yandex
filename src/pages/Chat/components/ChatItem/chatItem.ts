import Block from '../../../../modules/Block';
import {TRenderElement} from '../../../../modules/Block/types';
import {ChatItemProps} from './types';
import Router from '../../../../modules/Router';
import {RouterLinks} from '../../../../shared/const';
const template = require('./template.pug');

class ChatItem extends Block<ChatItemProps> {
  constructor(props: ChatItemProps) {
    super({
      events: {
        click: (event) => this.onClick(event),
      },
      ...props,
    });
  }

  onClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    Router.go(`${RouterLinks.CHAT}?chatId=${this.props.chatId}`);
    Router.start();
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default ChatItem;
