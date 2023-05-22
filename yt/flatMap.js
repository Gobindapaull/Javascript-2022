const arr = [20, 60, 90, 70, 50, 40, 80, 10, 30]

const insertEvery = function (array, data, nth) {
    return array.flatMap((ele, id) => (id + 1) % nth === 0 ? [ele, data] : ele)
}

console.log(insertEvery(arr, 1, 3))

// [20, 60, 90, 1, 70, 50, 40, 1, 80, 10,30, 1]
