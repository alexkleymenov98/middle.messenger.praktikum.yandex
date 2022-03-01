import Block from '../../../../modules/Block';
import {MessageFormProps} from './types';
import {TRenderElement} from '../../../../modules/Block/types';
import template from './template.pug';
import {InputName} from '../../../../shared/const';
import validator from '../../../../modules/Validate';
import ChatsServices from '../../../../services/chatsServices';

class MessageForm extends Block<MessageFormProps> {
  socket:WebSocket;
  constructor(props:Partial<MessageFormProps>) {
    super({
      inputName: InputName.MESSAGE,
      ...props,
      events: {
        submit: (event: Event) => this.onSubmit(event),
      },
    }, 'div', 'message-container__form');
  }

  onValid(name:InputName, value:FormDataEntryValue | null):boolean {
    if (typeof value !== 'string') return false;
    return validator[name](value).isValid;
  }

  onSubmit(event:Event):void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const form = {
      [InputName.MESSAGE]: formData.get(InputName.MESSAGE),
    };
    if (this.onValid(InputName.MESSAGE, form[InputName.MESSAGE])) {
      ChatsServices.sendMessageSocket(form[InputName.MESSAGE] as string);
      const component = this.getContent();
      const formElement = component.querySelector('#message-form') as HTMLFormElement;
      formElement.reset();
    }
  }

  render(): TRenderElement {
    const {placeholder = 'Сообщение', ...props} = this.props;
    return this.compile(template, {placeholder, ...props});
  }
}
export default MessageForm;
