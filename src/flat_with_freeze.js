// with()

const coding = ["solidity", "rust", "javascript"]

const newCoding = coding.with(1, "typescript")

console.log(newCoding)

// freeze()

const user = {
    name: "solidity",
    since: 2015
}

Object.freeze(user)

// try to change since 2016

user.since = 2016

console.log(user)

// flat()

const arr = [[1, 2], [3, 4], [5, 6]]

const newArr = arr.flat()

console.log(newArr)
