console.log("Hello Programmers")

let crypto = ["SOL", "ETH", "BNB"]
crypto.pop() // delete last element
crypto.push("USDT") // add last element

console.log(crypto)
console.log(crypto[2]) // accessing specific index

let numbers = [100, 1000, 2000, 3000]

// array iteration using for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(`Number : ${numbers[i]}`)
}

// array iteration using forEach method
numbers.forEach((i) => {
    console.log(`number : ${i}`)
})
