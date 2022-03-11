import Block from '../../../../modules/Block';
import {TRenderElement} from '../../../../modules/Block/types';
import {NavigationProps} from './types';
import Link from '../../../../components/Link';
import {RouterLinks, RouterLinksName} from '../../../../shared/const';
import AuthServices from '../../../../services/authServices';
const template = require('./template.pug');

class Navigation extends Block<NavigationProps> {
  constructor(props: Partial<NavigationProps>) {
    super({
      linkChangeMessages: new Link({
        label: RouterLinksName.CHAT,
        path: RouterLinks.CHAT,
        className: 'profile-link',
      }),
      linkChangeProfile: new Link({
        label: RouterLinksName.CHANGE_PROFILE,
        path: RouterLinks.CHANGE_PROFILE,
        className: 'profile-link',
      }),
      linkChangePassword: new Link({
        label: RouterLinksName.CHANGE_PASSWORD,
        path: RouterLinks.CHANGE_PASSWORD,
        className: 'profile-link',
      }),
      linkExit: new Link({
        label: RouterLinksName.EXIT,
        path: RouterLinks.LOGIN,
        className: 'profile-link profile-link-exit',
        events: {
          click: (event) => this.onLogout(event),
        },
      }), ...props,
    });
  }

  onLogout(event:Event): void {
    event.preventDefault();
    AuthServices.logout();
  }

  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}

export default Navigation;
