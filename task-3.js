//Bot

//Задача 2-3 условие

/*Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.*/

//Задача 2-3 решение

function findLongestWord(string = '') {
  // Write code under this line
  let words = string.split(' ');
  let LongestWord = words[0];
  for (const word of words) {
    if (word.length > LongestWord.length) {
      LongestWord = word;
    }
  }
  return LongestWord;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
