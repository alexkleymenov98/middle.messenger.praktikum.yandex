import Block from '../../modules/Block';
import {ChatProps} from './types';
import {TRenderElement} from '../../modules/Block/types';
import Link from '../../components/Link';
import {InputLabel, InputName, RouterLinks, RouterLinksName} from '../../shared/const';
import ChatsServices from '../../services/chatsServices';
import {openModal} from '../../modules/Store/actions';
import Button from '../../components/Button';
import ChatsList from './components/ChatsList';
import Modal from '../../components/modal';
import Form from '../../components/Form';
import Input from '../../components/Input/Input';
import {CreateChatRequest} from '../../api/chat/types';
import Content from './components/Content';
const template = require('./template.pug');

class Chat extends Block<ChatProps> {
  constructor(props: Partial<ChatProps>) {
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
          handlerSubmit: (values: CreateChatRequest) => {
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
          {
            label: 'Создать чат',
            events: {
              click: () => openModal('createChat'),
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
    return this.compile(template, this.props);
  }
}

export default Chat;
