'use strict';

(function () {
  var userDialog = document.querySelector('.setup');

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');

  var setupSubmitButton = userDialog.querySelector('.setup-submit');
  var setupWizardForm = userDialog.querySelector('.setup-wizard-form');

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

  var onClickSubmitButton = function () {
    setupWizardForm.submit();
  };

  setupSubmitButton.addEventListener('click', onClickSubmitButton);
  setupSubmitButton.addEventListener('keydown', function (evt) {
    if (evt.key === window.constants.ENTER_KEY) {
      onClickSubmitButton();
    }
  });
})();
