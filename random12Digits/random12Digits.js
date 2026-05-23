function generate12DigitNumber() {
    const numbers = []
    for (let i = 0; i < 12; i++) {
        numbers.push(Math.floor(Math.random() * 10))
    }
    console.log(numbers)
}

generate12DigitNumber();// [5, 6, 7, 7, 8, 4, 7, 2, 8, 7, 0, 3]

const random12Digits = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join("")

console.log(random12Digits); // 767360511690
