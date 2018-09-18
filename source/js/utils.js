(function () {
  window.utils = {
    DEBOUNCE_INTERVAL: 500,

    // Устранение дребезга
    debounce: function (fun) {
      var lastTimeout = null;

      return function () {
        var args = arguments;
        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(function () {
          fun.apply(null, args);
        }, window.utils.DEBOUNCE_INTERVAL);
      };
    },

    errorHandler: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; padding: 10px; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'fixed';
      node.style.top = 0;
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';
      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    },

    loadHandler: function () {
      var node = document.createElement('div');
      node.style = 'z-index: 100; padding: 10px; margin: 0 auto; text-align: center; background-color: green;';
      node.style.position = 'fixed';
      node.style.top = 0;
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';
      node.textContent = 'Данные успешно отправлены';
      document.body.insertAdjacentElement('afterbegin', node);
    }
  }
})()
