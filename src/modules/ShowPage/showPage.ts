import {
  TFShowPage,
} from './types';
import Errors from '../../pages/Errors';
import Chat from '../../pages/Chat';
import Login from '../../pages/Login';
import {render} from '../../utils/renderDom';
import {pagesHash} from '../../shared/const';
import Registration from '../../pages/Registration';
import ChangePassword from '../../pages/ChangePassword';
import ChangeProfile from '../../pages/ChangeProfile';
import Profile from '../../pages/Profile';
import Block from '../Block';

const pages:Record<string, Block<any>> = {
  [pagesHash.changePassword]: new ChangePassword({}),
  [pagesHash.changeProfile]: new ChangeProfile({}),
  [pagesHash.login]: new Login({}),
  [pagesHash.registration]: new Registration({}),
  [pagesHash.profile]: new Profile({}),
};

const showPage:TFShowPage = (hash)=> {
  if (hash === '') {
    const chat = new Chat({});
    render('#app', chat);
    return;
  }

  render('#app', pages[hash] ?? new Errors({code: 404, text: 'Не туда попали'}) as Block<any>);
};


export default showPage;
