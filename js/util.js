'use strict';

(function () {
  var userDialog = document.querySelector('.setup');

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');

  var setupSubmitButton = userDialog.querySelector('.setup-submit');
  var setupWizardForm = userDialog.querySelector('.setup-wizard-form');

  var successHandler = function () {
    userDialog.classList.add('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 200; margin: 0 auto; text-align: center; background-color: black; border: 5px solid red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var onEscPress = function (evt) {
    if (evt.key === window.constants.ESC_KEY) {
      onClickSetupClose();
    }
  };

  var onClickSetupOpen = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onEscPress);
  };

  var onClickSetupClose = function () {
    userDialog.classList.add('hidden');
    document.addEventListener('keydown', onEscPress);
  };

  setupOpen.addEventListener('click', onClickSetupOpen);
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === window.constants.ENTER_KEY) {
      onClickSetupOpen();
    }
  });

  setupClose.addEventListener('click', onClickSetupClose);
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.constants.ENTER_KEY) {
      onClickSetupClose();
    }
  });

  setupSubmitButton.addEventListener('keydown', function (evt) {
    if (evt.key === window.constants.ENTER_KEY) {
      window.backend.save(new FormData(setupWizardForm), successHandler, errorHandler);
    }
  });

  setupWizardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(setupWizardForm), successHandler, errorHandler);
  });
})();
