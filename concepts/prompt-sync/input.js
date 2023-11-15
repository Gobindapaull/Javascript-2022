const prompt = require('prompt-sync')()

const privateKey = []
let i = 0
while(i < 3) {
    const input = prompt("Enter your private key : ")
    privateKey.push(input)
    i++
}

console.log(privateKey)
