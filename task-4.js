//бот

//Задача 2-4 - условие
/*Форматирование строки в зависимости от длинны строки
Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.*/

//Задача 2-4 - решение
/*
function formatString(string, maxLength = 40) {
  // Write code under this line
  let formatString = '';
  const stringSplit = string.split('');
  let stringLength = stringSplit.length;

  if (stringLength <= maxLength) {
    console.log(string);
  } else if (stringLength > maxLength) {
    stringSplit.length = maxLength;
    console.log(stringSplit.join('') + '...');
  }
  return formatString;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
*/
function formatString(string, maxLength = 40) {
  // Write code under this line
  let formatString = '';
  const stringSplit = string.split('');
  const stringLength = stringSplit.length;

  if (stringLength <= maxLength) {
    console.log(stringSplit.join(''));
  }
  if (stringLength > maxLength) {
    stringSplit.length = maxLength;
    console.log(stringSplit.join('') + '...');
  }
  return formatString;
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'

//бот - решение
/*const stringSplit = string.split('');
const stringLength = stringSplit.length;
if (stringLength <= maxLength) {
  return stringSplit.join('');
}
if (stringLength > maxLength) {
  stringSplit.length = maxLength;
  return stringSplit.join('') + '...';
}*/
