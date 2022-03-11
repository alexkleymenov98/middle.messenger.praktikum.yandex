import Login from './pages/Login/login';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Router from './modules/Router';
import {RouterLinks} from './shared/const';
import ChangeProfile from './pages/ChangeProfile';
import ChangePassword from './pages/ChangePassword';
import AuthServices from './services/authServices';
import {getUser} from './modules/Store/actions';
import {Error404} from './pages/Errors';
import Registration from './pages/Registration';
import './styles/index.scss';

AuthServices.getUser().then(() => {
  const isAuth = !!getUser();
  Router.enterAuth(isAuth)
      .use(RouterLinks.LOGIN, Login, 'public')
      .use(RouterLinks.REGISTRATION, Registration, 'public')
      .use(RouterLinks.CHAT, Chat, 'private')
      .use(RouterLinks.PROFILE, Profile, 'private')
      .use(RouterLinks.CHANGE_PROFILE, ChangeProfile, 'private')
      .use(RouterLinks.CHANGE_PASSWORD, ChangePassword, 'private')
      .use(RouterLinks.ERROR_404, Error404, 'error');
  Router.start();
});
