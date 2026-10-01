function findMedianSortedArrays(num1, num2) {
    const arr = [...num1, ...num2].sort((a, b) => a -b)
    const mid = Math.floor(arr.length / 2)

    if (arr.length % 2 === 0) {
        console.log((arr[mid - 1] + arr[mid]) / 2)
    } else {
        console.log(arr[mid])
    }

    
} 

const num1 = [1, 2, 3]
const num2 = [4, 5, 6, 7]
findMedianSortedArrays(num1, num2)
