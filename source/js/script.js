const navMain = document.querySelector('.main-nav');
const logoHeaderMain = document.querySelector('.main-header__logo-wrap');
const navToggle = document.querySelector('.main-nav__toggle');
const fat = document.querySelector('.slider__container--fat')
const control = document.querySelector('.slider__control')

const reviewsModel = [];
const reviewsScreen = document.querySelectorAll('.reviews__content');
const prev = document.querySelector('.reviews__nav-button--prev');
const next = document.querySelector('.reviews__nav-button--next');

if (next ) {
  function setModel (i) {
    reviewsScreen.forEach(function (element, id) {
      reviewsModel[id] = 0;
    });
    reviewsModel[i] = 1;
  }

  setModel(0);

  function setActiveScreen (i) {
    setModel(i);
  }

  function getActiveScreen () {
    return reviewsModel.findIndex(function(element) {
      return (element === 1)
    });
  }

  function renderActiveScreen () {
    document.querySelector('.reviews__content--active').classList.remove('reviews__content--active');
    reviewsScreen[getActiveScreen()].classList.add('reviews__content--active');
  }

  next.addEventListener('click', function (evt) {
    evt.preventDefault();
    const activeNumber = getActiveScreen();
    const newActiveNumber = activeNumber < reviewsScreen.length-1 ? activeNumber + 1 : reviewsScreen.length-1;
    setActiveScreen(newActiveNumber);
    renderActiveScreen();
  });

  prev.addEventListener('click', function (evt) {
    evt.preventDefault();
    const activeNumber = getActiveScreen();
    const newActiveNumber = activeNumber > 0 ? activeNumber - 1 : 0;
    setActiveScreen(newActiveNumber);
    renderActiveScreen();
  });
}

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
