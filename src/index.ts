import showPage from './modules/ShowPage';

showPage(window.location.hash);

window.addEventListener('hashchange', function() {
  showPage(window.location.hash);
});

