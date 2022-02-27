import Block from '../../modules/Block';
import {ChatProps} from './types';
import template from './template.pug';
import UserList from './components/UserList';
import Content from './components/Content';
import {TRenderElement} from '../../modules/Block/types';
import Link from '../../components/Link';
import {InputLabel, InputName, RouterLinks, RouterLinksName} from '../../shared/const';
import Modal from '../../components/modal/modal';
import Form from '../../components/Form/form';
import Input from '../../components/Input';
import ChatsServices from '../../services/chatsServices';
import {CreateChatRequest} from '../../api/chat/types';

class Chat extends Block<ChatProps> {
  constructor(props:Partial<ChatProps>) {
    super({
      ...props,
      modal: new Modal({
        content: new Form({
          [InputName.TITLE]: new Input({
            labelName: InputLabel.CHAT_NAME,
            inputName: InputName.TITLE,
            placeholder: 'Новый чат',
          }),
          handlerSubmit: (values)=>{
            new ChatsServices().createChat(values as CreateChatRequest);
          },
          link: null,
          submitName: 'Создать чат',
        }),
      }),
      linkProfile: new Link({
        path: RouterLinks.PROFILE,
        label: RouterLinksName.PROFILE,
      }),
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
