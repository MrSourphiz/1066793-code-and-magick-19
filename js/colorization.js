'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var wizardCoat = userDialog.querySelector('.wizard-coat');
  var wizardCoatInput = userDialog.querySelector('input[name="coat-color"]');

  var wizardEyes = userDialog.querySelector('.wizard-eyes');
  var wizardEyesInput = userDialog.querySelector('input[name="eyes-color"]');

  var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = userDialog.querySelector('input[name="fireball-color"]');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  }

  var coatColor;
  var eyesColor;
  var wizards = [];

  wizardCoat.addEventListener('click', function () {
    var newColor = window.randomization.element(window.constants.PERSON_COAT);
    wizardCoat.style.fill = newColor;
    wizardCoatInput.value = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.randomization.element(window.constants.PERSON_EYES);
    wizardEyes.style.fill = newColor;
    wizardEyesInput.value = newColor;
    wizard.onEyesChange(newColor);
  });

  wizardFireball.addEventListener('click', function () {
    var fireballColor = window.randomization.element(window.constants.PERSON_FIREBALL);
    wizardFireball.style.backgroundColor = fireballColor;
    wizardFireballInput.value = fireballColor;
  });

  window.colorization = {
    wizard: wizard
  };
})();
