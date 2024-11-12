const arr = [11, 2, 3, 9, 8, 6, 23, 52, 85]
const find = 52
let isFound = false

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
        console.log(`Data found at index ${i}`)
        isFound = true
        break
    }
}

if (!isFound) {
    console.log("Data not found")
}

// Data found at index 7
