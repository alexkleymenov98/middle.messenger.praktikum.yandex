import {
  TFCheckActivePageByPageName,
  TFClearActivePage,
  TFShowElementByClassName,
  TFShowPage,
} from './types';

const pagesHash = {
  changePassword: '#changePassword',
  changeProfile: '#changeProfile',
  login: '#login',
  registration: '#registration',
  profile: '#profile',
};

const showElementByClassName:TFShowElementByClassName = (selector)=> {
  const element = document.querySelector(selector);
  if (element) {
    element.classList.add('show');
  }
};

const checkActivePageByPageName:TFCheckActivePageByPageName<keyof typeof pagesHash> = (pageName)=> {
  const hash = pagesHash[pageName];
  const selector = `.page-${pageName}`;
  const locationHash = window.location.hash.indexOf('#') === 0
    ? window.location.hash.slice(1)
    : window.location.hash;

  if (window.location.hash === '') {
    showElementByClassName('.page-message-list');
    return;
  }
  if (!(pagesHash[locationHash as keyof typeof pagesHash])) {
    showElementByClassName('.page-404');
    return;
  }
  if (window.location.hash === hash) {
    showElementByClassName(selector);
  }
};

const clearActivePage:TFClearActivePage = ()=> {
  const pageActiveList = document.querySelectorAll('.page.show');
  if (pageActiveList.length) {
    pageActiveList.forEach((page) => page.classList.remove('show'));
  }
};

const showPage:TFShowPage = ()=> {
  clearActivePage();
  (Object.keys(pagesHash) as (keyof typeof pagesHash)[])
      .forEach((hash) => checkActivePageByPageName(hash));
};

export default showPage;
