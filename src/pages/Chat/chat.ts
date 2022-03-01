import Block from '../../modules/Block';
import {ChatProps} from './types';
import template from './template.pug';
import Content from './components/Content';
import {TRenderElement} from '../../modules/Block/types';
import Link from '../../components/Link';
import {InputLabel, InputName, RouterLinks, RouterLinksName} from '../../shared/const';
import Modal from '../../components/modal';
import Form from '../../components/Form/form';
import Input from '../../components/Input';
import ChatsServices from '../../services/chatsServices';
import {CreateChatRequest} from '../../api/chat/types';
import ChatsList from './components/ChatsList';
import Button from '../../components/Button/button';
import {openModal} from '../../modules/Store/actions';

class Chat extends Block<ChatProps> {
  constructor(props:Partial<ChatProps>) {
    super({
      ...props,
      modal: new Modal({
        typeModal: 'createChat',
        content: new Form({
          [InputName.TITLE]: new Input({
            labelName: InputLabel.CHAT_NAME,
            inputName: InputName.TITLE,
            placeholder: 'Новый чат',
          }),
          handlerSubmit: (values)=>{
            ChatsServices.createChat(values as CreateChatRequest);
          },
          link: null,
          submitName: 'Создать чат',
        }),
      }),
      linkProfile: new Link({
        path: RouterLinks.PROFILE,
        label: RouterLinksName.PROFILE,
      }),
      actions: new Button(
          {label: 'Создать чат',
            events: {
              click: () =>openModal('createChat'),
            },
          },
      ),
      userList: new ChatsList({}),
      content: new Content({}),
    });
  }

  async openChat(): Promise<void> {
    const urlParam = new URL(window.location.href).searchParams.get('chatId');
    if (urlParam) {
      const chatId = parseFloat(urlParam);
      ChatsServices.closeSocket(chatId);
      await ChatsServices.getChat(chatId);
    }
  }

  async componentDidMount(): Promise<void> {
    await ChatsServices.getChats();
    await this.openChat();
  }

  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}

export default Chat;
