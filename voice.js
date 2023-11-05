'use strict';

import token from './token.js';

const url = 'https://api.voice.steos.io/v1/get/voices';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: token, // токен получаем бесплатно при регистрации https://console.cybervoice.io/user
};

const correctName = 'Всеслав Чародей'; // заменить на имя персонажа, который нужен.
// Список персонажей есть в телеграм боте @steosvoice_bot

fetch(url, {
  method: 'GET', // Изменить метод, если необходимо отправить другой тип запроса
  headers: headers,
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    let array = data['voices'];
    let correctIdArray = array.filter((item) => {
      return item.name.RU === correctName;
    });

    if (correctIdArray.length === 1) {
      let correctId = correctIdArray[0].voice_id;
      console.log(`voice_id нужного персонажа: `, correctId);
    }
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
