// ----------------Task1-------------------
let x = 1;
let y = 2;

let res1 = String(x) + y ; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1);  // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + "" + y;    // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); //  "true2"
console.log(typeof res2); // "string"

let res3 = Boolean (x || y);        // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = (Boolean(x) + "" + y) ** 2; // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

// ----------------Task2-------------------
let a = prompt('Введіть число');

if (a % 2 == 0 && a > 0) {
    console.log('ВВедене число парне додатнє!');
}
else if(a % 7 == 0) {
    console.log('ВВедене число кратне 7');
}
else {
    console.log('Умова для перевірки не задана');
}

// ----------------Task3-------------------
let arr = [];
arr[0] = 42;                // 1) У перший елемент масиву запишіть будь-яке число;
arr[1] = "hello";           // 2) У другий елемент масиву запишіть будь-який рядок;
arr[2] = true;              // 3) У третій елемент масиву запишіть будь-яке логічне значення;
arr[3] = null;              // 4) У четвертий елемент масиву запишіть значення null;

console.log(arr);
console.log(arr.length);    // 5) Виведіть на екран число елементів, яке зберігається в масиві;

arr[4] = prompt('Введіть будь-яке значення');  //6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
console.log(arr[4]);        // 7) Виведіть на екран п'ятий елемент масиву.

arr.shift();
console.log(arr);           // 8) Видаліть 1-ий елемент масиву і виведіть масив на екран.

// ----------------Task4-------------------
let cities = ["Rome", "Lviv", "Warsaw"];
let strCities = cities.join('*');
console.log(strCities);

// ----------------Task5-------------------
let isAdult = prompt('Чи досягли Ви повнолітнього віку?', 'Вкажіть ваш вік');
if (isAdult >= 18 && isAdult < 100) {
    alert('Ви досягли повнолітнього віку');
}
else if (isAdult < 18 && isAdult > 0) {
    alert('Ви ще надто молоді');
}
else {alert('Некоректні дані')}

// ----------------Task6-------------------
let a = +prompt('Перша сторона трикутника');
let b = +prompt('Друга сторона трикутника');
let c = +prompt('Третя сторона трикутника');
let p = (a + b + c) / 2; // півпериметр трикутника
let s = (p * (p - a) * (p - b) * (p - c)) ** 0.5;

// a) визначити і вивести в консоль площу трикутника
if (a < b + c && b < a + c && c < a + b) {                  // Перевірка на можливість існування такого трикутника
    if (isNaN(s) || a < 0 || b < 0 || c < 0) {              // Перевірка на коректність введених значень
        console.log('Incorrect data');
    }
    else {
        console.log('Площа трикутника дорівнює: ' + s.toFixed(3));
    }
}
else {
    console.log('Такого трикутника не існує');
}

// b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
if (a**2== (b**2)+(c**2) || b**2== (a**2)+(c**2) || c**2== (a**2)+(b**2) ) {
    console.log('Трикутник прямокутний');
}
else {
    console.log('Трикутник не прямокутний')
}

// ----------------Task7-------------------
let hourHi = new Date();

// a) switch statement
switch (hourHi.getHours()) {
  case 23:
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    alert('Доброї ночі');
    break;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    alert('Доброго ранку');
    break;
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    alert('Доброго дня');
    break;
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
    alert('Доброго вечора');
    break;
}

// b) if..else..if statement
if (hourHi.getHours() == 23 && hourHi.getHours() <= 5) {
    alert('Доброї ночі');
}
else if (hourHi.getHours() > 5 && hourHi.getHours() <= 11 ) {
    alert('Доброго ранку');
}
else if (hourHi.getHours() > 11 && hourHi.getHours() <= 17 ) {
    alert('Доброго дня');
}
else if (hourHi.getHours() > 17 && hourHi.getHours() <= 22 ) {
    alert('Доброго вечора');
}
