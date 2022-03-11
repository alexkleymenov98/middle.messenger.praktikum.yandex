import Block from '../../../../modules/Block';
import {AvatarProps} from './types';
// @ts-ignore
import template from './template.pug';
import {TRenderElement} from '../../../../modules/Block/types';
import UserServices from '../../../../services/userServices';

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

  // renderImage():void {
  //   const imgComponent = this.getContent().querySelector('#profile-avatar');
  //   if (imgComponent) {
  //     imgComponent.setAttribute('src', this.props.avatarLink);
  //   }
  // }

  // componentDidMount(): void {
  //   this.renderImage();
  // }
  // componentDidUpdate(): void {
  //   this.renderImage();
  // }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default Avatar;
