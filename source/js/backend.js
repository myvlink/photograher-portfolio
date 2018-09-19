'use strict';

(function () {
  var URL_UPLOAD = 'http://httpbin.org/post';
  var STATUS_SUCCES = 200;
  var TIMEOUT = 10000;
  window.backend = {
    load: function (data, loadHandler, errorHandler) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        if (xhr.status === STATUS_SUCCES) {
          loadHandler(xhr.response);
        } else {
          errorHandler('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        errorHandler('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        errorHandler('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });
      xhr.timeout = TIMEOUT;
      xhr.open('POST', URL_UPLOAD);
      xhr.send(data);
      return;
    }
  };
})();
