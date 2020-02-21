'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var PERSON_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var PERSON_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var PERSON_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var PERSON_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var PERSON_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var MIN_NAME_LENGTH = 2;
  var MAX_SIMILAR_WIZARD_COUNT = 4;

  window.constants = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    PERSON_NAME: PERSON_NAME,
    PERSON_SURNAME: PERSON_SURNAME,
    PERSON_COAT: PERSON_COAT,
    PERSON_EYES: PERSON_EYES,
    PERSON_FIREBALL: PERSON_FIREBALL,
    MIN_NAME_LENGTH: MIN_NAME_LENGTH,
    MAX_SIMILAR_WIZARD_COUNT: MAX_SIMILAR_WIZARD_COUNT
  };
})();
