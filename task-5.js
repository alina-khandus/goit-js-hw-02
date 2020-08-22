//бот

//Задача 2-5 условие

//Функция предикат
//Функция предикат возвращает true или false
//Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
//Функция проверяет ее на содержание слов spam и sale.
//Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.
//Слова в строке могут быть в произвольном регистре.

//Задача 2-5 решение

function checkForSpam(str) {
  'use strict';
  // Write code under this line

  // let message = '';

  //for (const element of str) {
  // const isLowerCase = element === element.toLowerCase();
  //    message += message ? element.toLowerCase() : element.toLowerCase();

  //}
  //console.log(message.includes('sale'));
  // console.log(message.includes('spam'));
  return str.toLowerCase().includes('spam') ||
    str.toLowerCase().includes('sale')
    ? true
    : false;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//2-й способ
function checkForSpam(str) {
  'use strict';
  if (
    str.toLowerCase().includes('spam') ||
    str.toLowerCase().includes('sale')
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//3-й способ
function checkForSpam(str) {
  'use strict';
  let message = str
    .toLowerCase()
    .split('')
    .includes('spam' || 'sale');
  return message;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
