import showPage from './modules/ShowPage';

window.addEventListener('load', function() {
  showPage();
});

window.addEventListener('hashchange', function() {
  showPage();
});

