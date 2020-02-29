'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;

    return wizardElement;
  };

  var renderFragment = function (data) {

    var takeNumber = data.length > window.constants.MAX_SIMILAR_WIZARD_COUNT ? window.constants.MAX_SIMILAR_WIZARD_COUNT : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.render = {
    wizard: renderWizard,
    fragment: renderFragment
  };
})();
