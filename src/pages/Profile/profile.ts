import Block from '../../modules/Block';
import {ProfileProps} from './types';
import template from './template.pug';
import {TRenderElement} from '../../modules/Block/types';
import Navigation from './components/Navigation';
import Avatar from './components/Avatar';
import UserServices from '../../services/userServices';


class Profile extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    console.log(`https://ya-praktikum.tech/api/v2/resources${props.avatar}`);
    super({
      ...props,
      avatarBlock: new Avatar(
          {
            avatarLink: props.avatar ? `https://ya-praktikum.tech/api/v2/resources${props.avatar}`: '',
            events: {
              change: (event)=>{
                event.preventDefault();
                const formData = new FormData();
                formData.append('avatar', event.target.files[0]);
                new UserServices().updateUserAvatar(formData);
              },
            },
          }),
      navigation: new Navigation({}),
    });
  }

  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}

export default Profile;
