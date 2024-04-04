require("dotenv").config()
const ccxt = require("ccxt")

console.log(ccxt.exchanges)
console.log(`Total exchanges : ${ccxt.exchanges.length}`)
