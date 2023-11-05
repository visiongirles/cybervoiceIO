# Пример использования API для генерации голосов https://cybervoice.io/en/

- `voice.js` - получаем id_voice для нужного нам персонажа

- `getSomeTunes.js`- получаем ссылку для скачивания сгенерированного текста

- `package.json` - нужен для Node.js, если использовать ES Modules (`import`).
  Я использовала ES Modules для `token` в целях безопасности.
  Если вставить токен прям в файл `voice.js` или `getSomeTunes.js`, то файл `package.json` не нужен.

Чтобы всё работало, вам нужно самостоятельно получить своей токен и вставить его в файлы `voice.js` и `getSomeTunes.js` (см. комментарии в файлах).
Получить свой токен можно бесплатно при регистрации на сайте [https://console.cybervoice.io/user](https://console.cybervoice.io/user)

Буду вопросы, пишите!
