'use strict';

import token from './token.js';

const url = 'https://api.voice.steos.io/v1/get/tts';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: token, // токен получаем бесплатно при регистрации https://console.cybervoice.io/user
};

let body = {
  voice_id: 344,
  text: 'Привет зрителям канала duckate! Желаю приятного просмотра и хорошего вечера! Спасибо большое fuf83 и zadrot_l2 за помощь',
  format: 'mp3',
};

fetch(url, {
  method: 'POST', // Измените метод, если необходимо отправить другой тип запроса
  headers: headers,
  body: JSON.stringify(body),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(`Ссылка на скачивание: `, data.audio_url);
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
