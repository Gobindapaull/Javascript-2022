const cw = require('crypto-wallets')

const ethWallet = cw.generateWallet('ETH')
const btcWallet = cw.generateWallet('BTC')

console.log(`Address : ${ethWallet.address}`)
console.log(`Private Key : ${ethWallet.privateKey}\n`)

console.log(`BTC Address : ${btcWallet.address}`)
console.log(`Private Key : ${btcWallet.privateKey}`)

// "dependencies": {
//     "crypto-wallets": "^1.0.0"
//   }
