import Block from '../../modules/Block';
import {ChatProps} from './types';
import template from './template.pug';
import UserList from './components/UserList';
import Content from './components/Content';
import {TRenderElement} from '../../modules/Block/types';

class Chat extends Block<ChatProps> {
  constructor(props:Partial<ChatProps>) {
    super({
      ...props,
      userList: new UserList({}),
      content: new Content({isEmpty: false}),
    });
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}

export default Chat;
