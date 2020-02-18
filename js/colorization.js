'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var wizardCoat = userDialog.querySelector('.wizard-coat');
  var wizardCoatInput = userDialog.querySelector('input[name="coat-color"]');

  var wizardEyes = userDialog.querySelector('.wizard-eyes');
  var wizardEyesInput = userDialog.querySelector('input[name="eyes-color"]');

  var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = userDialog.querySelector('input[name="fireball-color"]');

  wizardCoat.addEventListener('click', function () {
    var coatColor = window.randomization.element(window.constants.PERSON_COAT);
    wizardCoat.style.fill = coatColor;
    wizardCoatInput.value = coatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var eyesColor = window.randomization.element(window.constants.PERSON_EYES);
    wizardEyes.style.fill = eyesColor;
    wizardEyesInput.value = eyesColor;
  });

  wizardFireball.addEventListener('click', function () {
    var fireballColor = window.randomization.element(window.constants.PERSON_FIREBALL);
    wizardFireball.style.backgroundColor = fireballColor;
    wizardFireballInput.value = fireballColor;
  });
})();
