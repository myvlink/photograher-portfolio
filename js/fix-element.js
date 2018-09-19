'use strict';
(function () {
  var screenHeigth = document.documentElement.clientHeight;
  var pageHeaderBlock = document.querySelector('.page-header');
  var installBlock = document.querySelector('.install');
  var pageFooterBlock = document.querySelector('.page-footer');
  pageFooterBlock.className = 'page-footer page-footer--hidden';
  window.onscroll = function () {
    if (pageHeaderBlock.getBoundingClientRect().top < 0 && installBlock.getBoundingClientRect().top > screenHeigth) {
      pageFooterBlock.className = 'page-footer';
    } else {
      pageFooterBlock.className = 'page-footer page-footer--hidden';
    }
  };
})()
