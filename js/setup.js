'use strict';

var PERSON_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PERSON_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var PERSON_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var PERSON_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var generateRandomValue = function (min, max) {
  var randomValue = Math.floor(Math.random() * (max - min + 1) + min);
  return randomValue;
};

var getUniqueArrayItems = function (arr) {
  var uniqueArr = [];
  var isUnique;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        isUnique = false;
        break;
      } else {
        isUnique = true;
      }
    }
    if (isUnique) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
};

var generateRandomArr = function (length, arr) {
  var minLength = 1;
  var maxLength = arr.length;
  var newArrLength = minLength;
  var newArr = arr.splice(generateRandomValue(0, maxLength - 1), newArrLength);

  if (length !== minLength) {
    newArrLength = generateRandomValue(minLength, maxLength);
    newArr = arr.splice(0, newArrLength);
  }

  var uniqueArr = getUniqueArrayItems(newArr);

  return uniqueArr;
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
