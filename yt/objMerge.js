let obj1 = {
    name: "bob"
}

let obj2 = {
    score: 94
}

// Merging Objects
let resultObj = Object.assign(obj1, obj2)
console.log(resultObj)

let obj3 = {
    name: "john",
    role: "owner",
}

let arr = [{score1: 99, score2: 97, score3: 93}]

let newArrObj = Object.assign({}, ...arr)
console.log(newArrObj)

let newObj = Object.assign({}, obj3)
console.log(newObj)
