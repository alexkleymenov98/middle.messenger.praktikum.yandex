import Block from '../../../../modules/Block';
import {AvatarProps} from './types';
import {TRenderElement} from '../../../../modules/Block/types';
import UserServices from '../../../../services/userServices';
const template = require('./template.pug');

class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super({
      events: {
        change: (event: any) => {
          event.preventDefault();
          const formData = new FormData();
          formData.append('avatar', event.target.files[0]);
          UserServices.updateUserAvatar(formData);
        },
      },
      ...props,
    });
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default Avatar;
