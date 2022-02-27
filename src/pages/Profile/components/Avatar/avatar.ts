import Block from '../../../../modules/Block';
import {AvatarProps} from './types';
import template from './template.pug';
import {TRenderElement} from '../../../../modules/Block/types';

class Avatar extends Block<AvatarProps> {
  constructor(props:AvatarProps) {
    super(props);
  }
  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default Avatar;
