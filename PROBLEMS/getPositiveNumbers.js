function getPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}

console.log(getPositiveNumbers([1, -2, 3, -4, 5, -6, 7, -8, 9, 0]));
// [ 1, 3, 5, 7, 9 ]
