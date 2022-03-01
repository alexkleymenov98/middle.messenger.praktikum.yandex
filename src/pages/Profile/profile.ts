import Block from '../../modules/Block';
import {ProfileProps} from './types';
import template from './template.pug';
import {TRenderElement} from '../../modules/Block/types';
import Navigation from './components/Navigation';
import Avatar from './components/Avatar';


class Profile extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super({
      ...props,
      avatarBlock: new Avatar({}),
      navigation: new Navigation({}),
    });
  }

  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}

export default Profile;
