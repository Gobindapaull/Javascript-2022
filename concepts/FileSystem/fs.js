const fs = require('fs')
const cowsay = require('cowsay')

console.log('Bot started !')
const coins = ['BNB', 'ETH', 'MATIC', 'TRX', 'SOL']
const output = coins.join('\n')
fs.writeFile('NewCoins.txt', output, fileWritten)

function fileWritten() {
    console.log('File Written Successfully !')
}

const say = cowsay.say({text: "mooooooooo"})
console.log(`Cow is saying ${say}`)



# node --version or node -v
# node
# let message = "Hello World"
# message

# To exit = ctrl + c

# mkdir coding-train-node-demo
# cd coding-train-node-demo

# cd .. ||| current directory ||| cd folderName
# npm init -y

# File System

// CommonJs module
// const fs = require('fs')

// ES module
// "type" : "module"
// import * as fs from 'fs'

