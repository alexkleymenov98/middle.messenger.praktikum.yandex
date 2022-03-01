import Block from '../../../../modules/Block';
import {ChatsListProps} from './types';
import template from './template.pug';
import {TRenderElement} from '../../../../modules/Block/types';

class ChatsList extends Block<ChatsListProps> {
  constructor(props:ChatsListProps) {
    super(props);
  }

  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}
export default ChatsList;
