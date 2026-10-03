function reverseInteger(x) {

    // 1. absolute value
    // 2. convert to string
    // 3. split into characters
    // 4. reverse
    // 5. join
    const reversed  = String(Math.abs(x)).split('').reverse().join('')
    const num = Number(reversed )

    if (num > Math.pow(2, 31) - 1) {
        return 0
    }

    return num * Math.sign(x)
}

const x = 2147483632

console.log(reverseInteger(x))
