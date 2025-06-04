
const min = parseFloat(0.054);
const max = parseFloat(0.056);

const result = max - min;
console.log(result, typeof result); // 0.0020000000000000018
console.log(result.toFixed(6), typeof result.toFixed(6)); // 0.002000
