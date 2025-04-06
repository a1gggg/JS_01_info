function binaryClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Функція для перетворення числа в двійкове представлення
  function toBinary(num) {
    return num.toString(2).padStart(6, '0'); // Додаємо початкові нулі для вирівнювання
  }

  // Перетворюємо години, хвилини та секунди в двійкові рядки
  const binaryHours = toBinary(hours);
  const binaryMinutes = toBinary(minutes);
  const binarySeconds = toBinary(seconds);

  // Виводимо двійковий час на сторінку
  document.getElementById('binary-hours').textContent = binaryHours;
  document.getElementById('binary-minutes').textContent = binaryMinutes;
  document.getElementById('binary-seconds').textContent = binarySeconds;
}

// Оновлюємо годинник кожну секунду
setInterval(binaryClock, 1000);

// Викликаємо функцію одразу, щоб відобразити час при завантаженні сторінки
binaryClock();

/*
ПОЯСНЕННЯ:

Цей код реалізує двійковий годинник на JavaScript, який відображає години, хвилини та секунди у двійковому форматі. Ось пояснення коду:
1. Функція binaryClock():
   - Отримує поточний час за допомогою new Date().
   - Витягує години, хвилини та секунди.
   - Викликає функцію toBinary() для кожного значення часу, щоб перетворити їх у двійкове представлення.
   - Виводить двійкові рядки на сторінку в елементи з ідентифікаторами binary-hours, binary-minutes та binary-seconds.


function binaryClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Функція для перетворення числа в двійкове представлення
  function toBinary(num) {
    return num.toString(2).padStart(6, '0'); // Додаємо початкові нулі для вирівнювання
  }

  // Перетворюємо години, хвилини та секунди в двійкові рядки
  const binaryHours = toBinary(hours);
  const binaryMinutes = toBinary(minutes);
  const binarySeconds = toBinary(seconds);

  // Виводимо двійковий час на сторінку
  document.getElementById('binary-hours').textContent = binaryHours;
  document.getElementById('binary-minutes').textContent = binaryMinutes;
  document.getElementById('binary-seconds').textContent = binarySeconds;
}

// Оновлюємо годинник кожну секунду
setInterval(binaryClock, 1000);

// Викликаємо функцію одразу, щоб відобразити час при завантаженні сторінки
binaryClock();
Пояснення:

1* Функція binaryClock():

*Отримує поточний час за допомогою new Date().
*Витягує години, хвилини та секунди.
В*икликає функцію toBinary() для кожного значення часу, щоб перетворити їх у двійкове представлення.
*Виводить двійкові рядки на сторінку в елементи з ідентифікаторами binary-hours, binary-minutes та binary-seconds.
2*Функція toBinary(num):

*Приймає число як аргумент.
*Перетворює число в двійковий рядок за допомогою toString(2).
*Використовує padStart(6, '0'), щоб додати початкові нулі до рядка, якщо його довжина менша за 6 символів. Це забезпечує вирівнювання двійкових рядків.

3* setInterval(binaryClock, 1000):

*Викликає функцію binaryClock() кожну секунду (1000 мілісекунд), щоб оновлювати час.

4*  binaryClock():

Викликається одразу при завантаженні сторінки, щоб відобразити початковий час.


HTML:
Для відображення двійкового часу на сторінці вам потрібно додати відповідні елементи HTML:

HTML

<!DOCTYPE html>
<html>
<head>
  <title>Двійковий годинник</title>
</head>
<body>
  <div id="binary-hours"></div>
  <div id="binary-minutes"></div>
  <div id="binary-seconds"></div>

  <script src="ваш_скрипт.js"></script>
</body>
</html>


Як використовувати:

Збережіть код JavaScript у файл з розширенням .js (наприклад, binary-clock.js).
Створіть файл HTML з наведеним вище кодом.
Замініть "ваш_скрипт.js" на ім'я вашого файлу JavaScript.
Відкрийте файл HTML у браузері.
Тепер ви побачите двійковий годинник на сторінці.
*/