/*1. filter manually */

let numbers = [5, 19, 8, 20, 3, 15, 11, 30, 14, 2, 22];
let numbersGreaterThanTen = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    numbersGreaterThanTen.push(numbers[i]);
  }
}
console.log(numbersGreaterThanTen);


/*2. remove duplicate */
let duplicateNumbers = [1, 2, 3, 2, 4, 5, 1, 6, 3, 7, 7,10, 11];
let uniqueNumbers = [];

for (let i = 0; i < duplicateNumbers.length; i++) {
  if (!uniqueNumbers.includes(duplicateNumbers[i])) {
    uniqueNumbers.push(duplicateNumbers[i]);
  }
}

console.log(uniqueNumbers);

