'use strict';
var emailInputField = document.querySelector('.contact-me__input--email');
var validateEmail = function() {
  var emailValue = emailInputField.value;
  emailInputField.setCustomValidity('');
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(emailValue)) {
    emailInputField.setCustomValidity('Введите адрес электронной почты');
  };
}
emailInputField.addEventListener('keyup', validateEmail);

// Отправка формы и отмена действия по умолчанию
var form = document.querySelector('.contact-me__form');
form.addEventListener('submit', function (evt) {
  window.backend.load(new FormData(form), window.utils.loadHandler, window.utils.errorHandler);
  evt.preventDefault();
});
