import Block from '../../../../modules/Block';
import {MessageHeaderProps} from './types';
import {TRenderElement} from '../../../../modules/Block/types';
import template from './template.pug';
import Modal from '../../../../components/modal';
import Form from '../../../../components/Form/form';
import {InputLabel, InputName} from '../../../../shared/const';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import {getActiveChat, openModal} from '../../../../modules/Store/actions';
import ChatsServices from '../../../../services/chatsServices';

class MessageHeader extends Block<MessageHeaderProps> {
  constructor(props: MessageHeaderProps) {
    super({
      ...props,
      modal: new Modal({
        typeModal: 'addUser',
        content: new Form({
          [InputName.USER_ID]: new Input({
            labelName: InputLabel.USER_ID,
            inputName: InputName.USER_ID,
            placeholder: '234235',
          }),
          handlerSubmit: (values: { user_id: string }) => {
            const chat = getActiveChat();
            if (chat && chat.chatId) {
              ChatsServices.addUserToChat({users: [+values.user_id], chatId: chat.chatId});
            }
          },
          link: null,
          submitName: 'Добавить пользователя',
        }),
      }),
      button: new Button({
        label: 'Добавить пользователя',
        events: {
          click: () => openModal('addUser'),
        },
      }),
    }, 'div', 'message-container__header');
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default MessageHeader;
