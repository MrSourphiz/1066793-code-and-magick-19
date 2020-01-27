'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHIFT = 10;

var COLUMN_X = 140;
var COLUMN_Y = 240;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var COLUMN_DISTANCE = 50;

var TEXT_COLOR = '#000000';
var TEXT_FONT = '16px PT Mono';
var TEXT_HEIGHT = 20;
var TEXT_SHIFT = 30;

var HSL_HUE = [210, 240];
var HSL_SATURATION = [70, 100];
var HSL_LIGHTNESS = [25, 60];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, x, y, color, font, height, text) {
  var lines = text.split('\n');
  var lineHeight = height;
  ctx.fillStyle = color;
  ctx.font = font;
  for (var i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], x, y + (i * lineHeight));
  }
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr.length === 0) {
      maxElement = 0;
    } if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var generateRandomNumber = function (arr) {
  var minNumber = arr[0];
  var randomNumber = minNumber;
  for (var i = 0; i < arr.length; i++) {
    if (arr.length === 0) {
      randomNumber = 0;
    } if (arr[i] > minNumber) {
      var maxNumber = arr[i];
      randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + 1) + minNumber;
    }
  }
  return randomNumber;
};

var generateColorString = function () {
  var hsl = 'hsl(' + generateRandomNumber(HSL_HUE) + ', ' + generateRandomNumber(HSL_SATURATION) + '%,  ' + generateRandomNumber(HSL_LIGHTNESS) + '%)';
  return hsl;
};

var renderColumn = function (ctx, x, y, names, times) {
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var text = Math.round(times[i]) + '\n' + names[i];
    renderText(ctx, COLUMN_X + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, COLUMN_Y - ((COLUMN_HEIGHT * times[i]) / maxTime) - 10, TEXT_COLOR, TEXT_FONT, ((COLUMN_HEIGHT * times[i]) / maxTime) + TEXT_SHIFT, text);

    if (names[i] !== times[i]) {
      ctx.fillStyle = '#000';
      ctx.fillRect(x + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, y - 5, COLUMN_WIDTH, 5);
    }

    var columnColor;
    if (names[i] === 'Вы') {
      columnColor = 'rgba(255, 0, 0, 1)';
    } else {
      columnColor = generateColorString();
    }

    ctx.fillStyle = columnColor;
    ctx.fillRect(x + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, y - ((COLUMN_HEIGHT * times[i]) / maxTime), COLUMN_WIDTH, (COLUMN_HEIGHT * times[i]) / maxTime);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_SHIFT, CLOUD_Y + CLOUD_SHIFT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  renderText(ctx, CLOUD_X + TEXT_HEIGHT, CLOUD_Y + TEXT_SHIFT, TEXT_COLOR, TEXT_FONT, TEXT_HEIGHT, 'Ура вы победили!\nСписок результатов:');
  renderColumn(ctx, COLUMN_X, COLUMN_Y, names, times);
};
