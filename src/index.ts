import showPage from './modules/showPage';

window.addEventListener('load', function() {
  showPage();
});

window.addEventListener('hashchange', function() {
  showPage();
});

