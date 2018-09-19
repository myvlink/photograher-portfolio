'use strict';
(function () {

  // Скрытие кнопки вверх
  var aboutMeBlock = document.querySelector('.about-me');
  var pageFooterLinkToUp = document.querySelector('.page-footer__link-to-up');
  pageFooterLinkToUp.classList.add('page-footer__link-to-up--hidden');
  window.onscroll = window.utils.debounce(function () {
    if (aboutMeBlock.getBoundingClientRect().top < 0) {
      pageFooterLinkToUp.classList.remove('page-footer__link-to-up--hidden');
    } else {
      pageFooterLinkToUp.classList.add('page-footer__link-to-up--hidden');
    }
  });
})()
