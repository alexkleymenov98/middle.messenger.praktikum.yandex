import Login from './pages/Login';
import Chat from './pages/Chat';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
import Router from './modules/Router';
import {RouterLinks} from './shared/const';
import ChangeProfile from './pages/ChangeProfile';
import ChangePassword from './pages/ChangePassword';
import AuthServices from './services/authServices';
import Store from './modules/Store/store';

new AuthServices().getUser().then(() => {
  const isAuth = !!Store.getState().user;
  Router.enterAuth(isAuth)
      .use(RouterLinks.LOGIN, Login, 'public')
      .use(RouterLinks.REGISTRATION, Registration, 'public')
      .use(RouterLinks.CHAT, Chat, 'private')
      .use(RouterLinks.PROFILE, Profile, 'private')
      .use(RouterLinks.CHANGE_PROFILE, ChangeProfile, 'private')
      .use(RouterLinks.CHANGE_PASSWORD, ChangePassword, 'private');
  Router.start();
});
