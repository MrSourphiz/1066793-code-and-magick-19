'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var COLUMN_X = 140;
var COLUMN_Y = 240;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var COLUMN_DISTANCE = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomVal = function (min, max) {
  var randomVal = Math.floor(Math.random() * (max - min) + 1) + min;
  return randomVal;
};

var getColor = function () {
  var hsl = 'hsl(' + getRandomVal(210, 240) + ', ' + getRandomVal(70, 100) + '%,  ' + getRandomVal(25, 60) + '%)';
  return hsl;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], COLUMN_X + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, 260);
    ctx.fillText(Math.round(times[i]), COLUMN_X + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, COLUMN_Y - ((COLUMN_HEIGHT * times[i]) / maxTime) - 5);

    if (names[i] !== times[i]) {
      ctx.fillStyle = '#000';
      ctx.fillRect(COLUMN_X + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, COLUMN_Y - 5, COLUMN_WIDTH, 5);
    }

    var columnColor;
    if (names[i] === 'Вы') {
      columnColor = 'rgba(255, 0, 0, 1)';
    } else {
      columnColor = getColor();
    }

    ctx.fillStyle = columnColor;
    ctx.fillRect(COLUMN_X + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, COLUMN_Y - ((COLUMN_HEIGHT * times[i]) / maxTime), COLUMN_WIDTH, (COLUMN_HEIGHT * times[i]) / maxTime);
  }
};
