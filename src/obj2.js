const token = {
    name: "USDT TOKEN",
    symbol: "USDT",
    price: 1,
    gas: {
        gasPrice: 5,
        gasLimit: 500000
    }
}

for(let key in token) {
    console.log(key, token[key])
}

const chain = "bsc"

console.log(chain)
console.log(chain.length)
console.log(chain.toUpperCase())

console.log(token)
console.log(token.name)
console.log(token.gas.gasPrice)
