function getMaxProduct(arr) {
    arr.sort((a, b) => b - a);
    console.log(arr); // [ 7, 6, 5, 3, 2 ]
    return arr[0] * arr[1]; // arr[0] = 7 & arr[1] = 6
}

console.log(getMaxProduct([2, 3, 5, 6, 7])); // 42 
