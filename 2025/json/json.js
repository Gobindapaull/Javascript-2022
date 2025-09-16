// json = Javascript Object Notation
const data = {
    "name": "ETH",
    "price": 4500,
    "blockchain": {
        "Ethereum": true
    }
}

// Access the json
console.log(data.name); // dot notation
console.log(data["price"]) // bracket notation
console.log(data.blockchain.Ethereum)
