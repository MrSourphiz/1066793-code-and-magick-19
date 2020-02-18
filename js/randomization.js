'use strict';

(function () {
  var generateRandomValue = function (min, max) {
    var randomValue = Math.floor(Math.random() * (max - min + 1) + min);
    return randomValue;
  };

  var getRandomElement = function (arr) {
    var randomIndex = generateRandomValue(0, arr.length - 1);

    return arr[randomIndex];
  };

  var generatePersonArr = function (length) {
    var maxLength = length;
    var personArr = [];

    while (personArr.length < maxLength) {
      var person = {
        name: getRandomElement(window.constants.PERSON_NAME) + ' ' + getRandomElement(window.constants.PERSON_SURNAME),
        coatColor: getRandomElement(window.constants.PERSON_COAT),
        eyesColor: getRandomElement(window.constants.PERSON_EYES)
      };
      personArr.push(person);
    }
    return personArr;
  };

  window.randomization = {
    element: getRandomElement,
    personArr: generatePersonArr
  };
})();
