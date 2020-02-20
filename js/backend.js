'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  var DATA_URL = 'https://js.dump.academy/code-and-magick/data';
  var TIMEOUT_IN_MS = 10000;
  var statusCode = {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    ENTERNAL_ERROR: 500
  };

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case statusCode.SUCCESS:
          onLoad(xhr.response);
          break;
        case statusCode.BAD_REQUEST:
          onError('Статус ответа: ' + xhr.status + ' ' + 'Cервер не смог обработать запрос');
          break;
        case statusCode.NOT_FOUND:
          onError('Статус ответа: ' + xhr.status + ' ' + 'Запрашиваемая страница не найдена');
          break;
        case statusCode.ENTERNAL_ERROR:
          onError('Статус ответа: ' + xhr.status + ' ' + 'Внутренняя ошибка сервера');
          break;
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + ' мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', DATA_URL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case statusCode.SUCCESS:
          onLoad(xhr.response);
          break;
        case statusCode.BAD_REQUEST:
          onError('Статус ответа: ' + xhr.status + ' ' + 'Cервер не смог обработать запрос');
          break;
        case statusCode.NOT_FOUND:
          onError('Статус ответа: ' + xhr.status + ' ' + 'Запрашиваемая страница не найдена');
          break;
        case statusCode.ENTERNAL_ERROR:
          onError('Статус ответа: ' + xhr.status + ' ' + 'Внутренняя ошибка сервера');
          break;
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + ' мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
