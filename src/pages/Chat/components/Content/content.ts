import Block from '../../../../modules/Block';
import {ContentProps} from './types';
import {TRenderElement} from '../../../../modules/Block/types';
import MessageForm from '../MessageForm';
import MessageHeader from '../MessageHeader';
import MessageList from '../MessageList';
const template = require('./template.pug');

class Content extends Block {
  constructor(props: Partial<ContentProps>) {
    super({
      ...props,
      showEmpty: 'hidden',
      showMessage: 'hidden',
      messageHeader: new MessageHeader({}),
      messageList: new MessageList({}),
      messageForm: new MessageForm({}),
    }, 'div', 'message-content');
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default Content;
