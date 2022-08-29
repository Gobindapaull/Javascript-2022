// Array Sum using reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const add = (a, b) => a + b;
const result = numbers.reduce(add)
console.log(result);
