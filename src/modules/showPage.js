const pagesHash = {
    changePassword:'#changePassword',
    changeProfile:'#changeProfile',
    login:'#login',
    registration:'#registration',
    profile:'#profile',
};

function showElementByClassName(selector){
    const element = document.querySelector(selector);
    if (element) {
        element.classList.add('show');
    }
}

function checkActivePageByPageName(pageName) {
    const hash = pagesHash[pageName];
    const selector = `.page-${pageName}`;
    const locationHash = window.location.hash.indexOf('#') === 0
        ? window.location.hash.slice(1)
        :window.location.hash;

    if(window.location.hash === ''){
        showElementByClassName('.page-message-list');
        return
    }
    if (!(pagesHash[locationHash])) {
        showElementByClassName('.page-404');
        return;
    }
    if (window.location.hash === hash) {
        showElementByClassName(selector)
    }
}

function clearActivePage(){
    const pageActiveList = document.querySelectorAll('.page.show');
    if (pageActiveList.length) {
        pageActiveList.forEach((page) => page.classList.remove('show'));
    }
}

function showPage(){
    clearActivePage();
    Object.keys(pagesHash).forEach((hash) => checkActivePageByPageName(hash))
}

export default showPage;
