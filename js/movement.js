'use strict';

(function () {
  var SETUP_POSITION_TOP = 80 + 'px';
  var SETUP_POSITION_LEFT = 50 + '%';

  var userDialog = document.querySelector('.setup');
  var dialogHandler = userDialog.querySelector('.upload');
  var setupClose = userDialog.querySelector('.setup-close');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    var returnToStartPosition = function () {
      userDialog.style.top = SETUP_POSITION_TOP;
      userDialog.style.left = SETUP_POSITION_LEFT;
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    setupClose.addEventListener('click', returnToStartPosition);
    setupClose.addEventListener('keydown', function (enterEvt) {
      if (enterEvt.key === window.constants.ENTER_KEY) {
        returnToStartPosition();
      }
    });
    document.addEventListener('keydown', function (escEvt) {
      if (escEvt.key === window.constants.ESC_KEY) {
        returnToStartPosition();
      }
    });
  });
})();
