import Block from '../../../../modules/Block';
import {ContentProps} from './types';
import template from './template.pug';
import {TRenderElement} from '../../../../modules/Block/types';
import MessageForm from '../MessageForm';
import MessageHeader from '../MessageHeader/messageHeader';
import MessageList from '../MessageList';

class Content extends Block<ContentProps> {
  constructor(props:Partial<ContentProps>) {
    super({
      isEmpty: true,
      messageHeader: new MessageHeader({
        name: 'Вадим',
        avatarSrc: '',
      }),
      messageList: new MessageList({}),
      messageForm: new MessageForm({}),
      ...props,
    }, 'div', 'message-content');
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}
export default Content;
