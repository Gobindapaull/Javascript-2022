function fibonacciSequence(n) {
    const sequence = [0, 1]
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2]
    }
    return sequence;
}

console.log(fibonacciSequence(8)); // [0, 1, 1,  2, 3, 5, 8, 13 ]
