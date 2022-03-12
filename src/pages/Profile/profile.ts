import Block from '../../modules/Block';
import {ProfileProps} from './types';
import {TRenderElement} from '../../modules/Block/types';
import Navigation from './components/Navigation';
import Avatar from './components/Avatar';
const template = require('./template.pug');


class Profile extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super({
      ...props,
      avatarBlock: new Avatar({}),
      navigation: new Navigation({}),
    });
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default Profile;
