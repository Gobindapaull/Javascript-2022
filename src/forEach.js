const numbers = [1,2,3,4,5,6,7,8,9]
const result = []
numbers.forEach((num) => {
    if (num % 2 == 0) {
        result.push(num * 2)
    }
})

console.log(result)
