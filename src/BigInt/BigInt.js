// how to create a BigInt

let x = 1234567890n;
// or 
let y = BigInt(1234567890);

console.log(`type of x is ${typeof x}`)
console.log(`type of y is ${typeof y}`)

// division
let z = Number(x) / 2;
console.log(`z is ${z}`)

// maximum safe integer
let max = Number.MAX_SAFE_INTEGER;
console.log(`max safe integer : ${max}`)

// minimum safe integer
let min = Number.MIN_SAFE_INTEGER;
console.log(`min safe integer: ${min}`)

// Is integer ?
let int = Number.isInteger(10.5);
console.log(`int checking : ${int}`)
