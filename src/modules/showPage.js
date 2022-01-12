const pagesHash = ['changePassword','changeProfile','login', 'registration','profile'];

function showElementByClassName(selector){
    const element = document.querySelector(selector);
    if (element) {
        element.classList.add('show');
    }
}

function checkActivePageByPageName(pageName) {
    const hash = `#${pageName}`;
    const selector = `.page-${pageName}`
    if(window.location.hash === ''){
        showElementByClassName('.page-message-list');
        return
    }
    if (!(pagesHash.some((key) => `#${key}` === window.location.hash))) {
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
    pagesHash.forEach((hash) => checkActivePageByPageName(hash))
}

export default showPage;
