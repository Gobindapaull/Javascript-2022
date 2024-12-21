
const x = typeof(typeof(10))
const y = typeof(typeof(null))
const z = typeof(typeof(undefined))
const w = typeof(typeof(true))
const p = typeof(typeof(-1))
const q = typeof(typeof(e))

console.log(x) // string
console.log(y) // string
console.log(z) // string
console.log(w) // string
console.log(p) // string
console.log(q) // string

const bigInt = BigInt(1000000000000000);
console.log(typeof(bigInt)); // bigint

console.log(typeof(null)) // object
console.log(typeof(undefined)) // undefined

console.log(0/0); //NaN

console.log(typeof(NaN)); // number

console.log(isNaN(1)); // false
console.log(isNaN("abc")); // true


// git status
// git add .
// git status
// git commit -m "I changed my first commit"
// git push origin main
