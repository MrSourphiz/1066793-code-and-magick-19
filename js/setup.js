'use strict';

var PERSON_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PERSON_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var PERSON_COAT = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var PERSON_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var generateRandomNumber = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
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
    newArrLength = generateRandomNumber(minLength, maxLength);
  }

  while (newArr.length < newArrLength) {
    var newArrElementIndex = generateRandomNumber(0, maxLength - 1);
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
      name: generateRandomArr(8, PERSON_NAME) + ' ' + generateRandomArr(8, PERSON_SURNAME),
      coatColor: generateRandomArr(1, PERSON_COAT),
      eyesColor: generateRandomArr(1, PERSON_EYES)
    };
    personArr.push(person);
  }
  return personArr;
};

generatePersonArr(8);
