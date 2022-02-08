import Block from '../../modules/Block';
import {ProfileProps} from './types';
import template from './template.pug';
import {TRenderElement} from '../../modules/Block/types';
// @ts-ignore
import defaultIcon from '../../../static/images/default-icon.png';
import Navigation from './components/Navigation';
import {RouterLinks, RouterLinksName} from '../../shared/const';


class Profile extends Block<ProfileProps> {
  constructor(props:Partial<ProfileProps>) {
    super({
      name: 'Иван Иванов',
      avatar: defaultIcon,
      navigation: new Navigation({
        labelLinkChangeProfile: RouterLinksName.CHANGE_PROFILE,
        linkChangeProfile: RouterLinks.CHANGE_PROFILE,
        labelLinkChangePassword: RouterLinksName.CHANGE_PASSWORD,
        linkChangePassword: RouterLinks.CHANGE_PASSWORD,
        labelLinkExit: RouterLinksName.EXIT,
        linkExit: RouterLinks.LOGIN,
      }),
      ...props});
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}
export default Profile;
