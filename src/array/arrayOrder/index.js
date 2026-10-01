const num1 = [1, 2, 3, 4, 5, 6, 7, 8]
const num2 = [9, 10, 11]

const descending = [...num1, ...num2].sort((a, b) => b - a) // largest to smallest
console.log(descending) 

const ascending = [...num1, ...num2].sort((a, b) => a - b) // smallest to largest
console.log(ascending) 
