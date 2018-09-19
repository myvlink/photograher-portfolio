'use strict';
(function () {
  var screenHeigth = document.documentElement.clientHeight;
  // Скрытие кнопки вверх
  var pageHeaderBlock = document.querySelector('.page-header');
  var pageFooterLinkToUp = document.querySelector('.page-footer__link-to-up');
  var pageFooterBlock = document.querySelector('.page-footer');
  pageFooterLinkToUp.classList.add('page-footer__link-to-up--hidden');
  window.onscroll = window.utils.debounce(function () {
    if (pageHeaderBlock.getBoundingClientRect().top < 0) {
      pageFooterLinkToUp.classList.remove('page-footer__link-to-up--hidden');
    } else {
      pageFooterLinkToUp.classList.add('page-footer__link-to-up--hidden');
    }

    if (pageFooterBlock.getBoundingClientRect().top < screenHeigth) {
      pageFooterLinkToUp.classList.add('page-footer__link-to-up--stopped');
    } else {
      pageFooterLinkToUp.classList.remove('page-footer__link-to-up--stopped');
    }
  });
})()
