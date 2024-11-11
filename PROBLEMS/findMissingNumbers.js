function findMissingNumbers(arr) {
    const n = arr.length + 1;

    const sum = (n * (n + 1)) / 2;
    console.log(sum); // 45

    const actualSum = arr.reduce((acc, num) => acc + num, 0)
    console.log(actualSum); // 41

    return sum - actualSum; // 4
}

console.log(findMissingNumbers([1, 2, 3, 5, 6, 7, 8, 9])); // 4
