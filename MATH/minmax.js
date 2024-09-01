const main = (a, b) => {
    let min = Math.min(a, b)
    console.log(min)

    let max = Math.max(a, b)
    console.log(max)

    let sum = 0

    for (let i = min; i <= max; i++) {
        sum += i
    }
    console.log(sum)
}

main(-1, 3) // -1 + 0 + 1 + 2 + 3 = 5
