const navMain = document.querySelector('.main-nav');
const logoHeaderMain = document.querySelector('.main-header__logo-wrap');
const navToggle = document.querySelector('.main-nav__toggle');
const fat = document.querySelector('.slider__container--fat')
const control = document.querySelector('.slider__control')

navMain.classList.remove('main-nav--nojs');
logoHeaderMain.classList.remove('main-header__logo-wrap--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
