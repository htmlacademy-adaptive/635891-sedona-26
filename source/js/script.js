let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');
let headerLogo = document.querySelector('.header__logo');

navMain.classList.remove('navigation--nojs');
headerLogo.classList.remove('header__logo--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});
