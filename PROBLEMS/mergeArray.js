function mergeArray(arr1, arr2) {
    const merge = arr1.concat(arr2);
    return merge.sort((a, b) => a - b);
}

console.log(mergeArray([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
// [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
