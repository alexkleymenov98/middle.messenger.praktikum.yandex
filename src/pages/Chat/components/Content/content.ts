import Block from '../../../../modules/Block';
import {ContentProps} from './types';
import {template} from './template';
import {TRenderElement} from '../../../../modules/Block/types';
import MessageForm from '../MessageForm';
import MessageHeader from '../MessageHeader/messageHeader';
import MessageList from '../MessageList';

class Content extends Block<ContentProps> {
  constructor(props:Partial<ContentProps>) {
    super({
      isEmpty: false,
      messageHeader: new MessageHeader({
        name: 'Вадим',
        avatar: '',
      }),
      messageList: new MessageList({}),
      messageForm: new MessageForm({}),
      ...props,
    });
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}
export default Content;
