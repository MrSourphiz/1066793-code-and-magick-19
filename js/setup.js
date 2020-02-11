'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var MIN_NAME_LENGTH = 2;

var PERSON_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PERSON_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var PERSON_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var PERSON_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var PERSON_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');

var userNameInput = userDialog.querySelector('.setup-user-name');

var setupSubmitButton = userDialog.querySelector('.setup-submit');
var setupWizardForm = userDialog.querySelector('.setup-wizard-form');

var wizardCoat = userDialog.querySelector('.wizard-coat');
var wizardCoatInput = userDialog.querySelector('input[name="coat-color"]');

var wizardEyes = userDialog.querySelector('.wizard-eyes');
var wizardEyesInput = userDialog.querySelector('input[name="eyes-color"]');

var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
var wizardFireballInput = userDialog.querySelector('input[name="fireball-color"]');

var onEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
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

var onClickSubmitButton = function () {
  setupWizardForm.submit();
};

setupOpen.addEventListener('click', onClickSetupOpen);
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    onClickSetupOpen();
  }
});

setupClose.addEventListener('click', onClickSetupClose);
setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    onClickSetupClose();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов');
  } else {
    target.setCustomValidity('');
  }
});

setupSubmitButton.addEventListener('click', onClickSubmitButton);
setupSubmitButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    onClickSubmitButton();
  }
});

wizardCoat.addEventListener('click', function () {
  var coatColor = generateRandomArr(1, PERSON_COAT);
  wizardCoat.style.fill = coatColor;
  wizardCoatInput.value = coatColor;
});

wizardEyes.addEventListener('click', function () {
  var eyesColor = generateRandomArr(1, PERSON_EYES);
  wizardEyes.style.fill = eyesColor;
  wizardEyesInput.value = eyesColor;
});

wizardFireball.addEventListener('click', function () {
  var fireballColor = generateRandomArr(1, PERSON_FIREBALL);
  wizardFireball.style.backgroundColor = fireballColor;
  wizardFireballInput.value = fireballColor;
});

var generateRandomValue = function (min, max) {
  var randomValue = Math.floor(Math.random() * (max - min + 1) + min);
  return randomValue;
};

var generateUniqueArr = function (arr) {
  var uniqueArr = [];
  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    var hitCounter = 0;
    for (var j = 0; j < arr.length; j++) {
      if (number === arr[j]) {
        hitCounter++;
      }
    }
    if (hitCounter === 1) {
      uniqueArr.push(number);
    }
  }

  return uniqueArr;
};

var generateRandomArr = function (length, arr) {
  var minLength = 1;
  var maxLength = arr.length;
  var newArr = [];

  if (length === 1) {
    var newArrLength = minLength;
  } else {
    newArrLength = generateRandomValue(minLength, maxLength);
  }

  while (newArr.length < newArrLength) {
    var newArrElementIndex = generateRandomValue(0, maxLength - 1);
    newArr.push(newArrElementIndex);
  }

  var uniqueArr = generateUniqueArr(newArr);
  var valueArr = [];
  for (var i = 0; i < uniqueArr.length; i++) {
    var uniqueArrIndex = uniqueArr[i];
    valueArr.push(arr[uniqueArrIndex]);
  }

  return valueArr;
};

var generatePersonArr = function (length) {
  var maxLength = length;
  var personArr = [];

  while (personArr.length < maxLength) {
    var person = {
      name: generateRandomArr(1, PERSON_NAME) + ' ' + generateRandomArr(1, PERSON_SURNAME),
      coatColor: generateRandomArr(1, PERSON_COAT),
      eyesColor: generateRandomArr(1, PERSON_EYES)
    };
    personArr.push(person);
  }
  return personArr;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
var wizards = generatePersonArr(4);
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


