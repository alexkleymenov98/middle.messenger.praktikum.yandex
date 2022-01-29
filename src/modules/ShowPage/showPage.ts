import {
  TFCheckActivePageByPageName,
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

const pages:Record<pagesHash, unknown> = {
  [pagesHash.changePassword]: new ChangePassword({}),
  [pagesHash.changeProfile]: new ChangeProfile({}),
  [pagesHash.login]: new Login({}),
  [pagesHash.registration]: new Registration({}),
  [pagesHash.profile]: new Profile({}),
};

const checkActivePageByPageName:TFCheckActivePageByPageName<keyof typeof pagesHash> = (pageName)=> {
  const hash = pagesHash[pageName];
  const locationHash = window.location.hash.indexOf('#') === 0
    ? window.location.hash.slice(1)
    : window.location.hash;

  if (window.location.hash === '') {
    const chat = new Chat({});
    render('#app', chat);
    return;
  }
  if (!(pagesHash[locationHash as keyof typeof pagesHash])) {
    const page404 = new Errors({code: 404, text: 'Не туда попали'});
    render('#app', page404);
    return;
  }
  if (window.location.hash === hash) {
    render('#app', pages[hash] as Block<any>);
  }
};

const showPage:TFShowPage = ()=> {
  (Object.keys(pagesHash) as (keyof typeof pagesHash)[])
      .forEach((hash) => checkActivePageByPageName(hash));
};

export default showPage;
