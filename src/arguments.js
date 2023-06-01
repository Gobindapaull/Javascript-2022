const sumAll = function() {
    console.log(arguments)
    console.log(arguments[2])

    let total = 0
    for (let i of arguments) {
        total += i
    }
    console.log(total)
}

sumAll(1,2,3,4,5)
// { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
// 3
// 15

// or 

const sumAll2 = function() {
    return Array.from(arguments).reduce((tot, num) => tot + num, 0)
}

console.log(sumAll2(1,2,3,4,5))
// 15
