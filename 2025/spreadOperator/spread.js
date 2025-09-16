// Spread Operator

const arr1 = [1, 2, 3, 4, 5, 9999];
const arr2 = [...arr1];

arr2.push(1011);

console.log(`[======================== Array 1 ===================================]`);
console.log(arr1);
console.log(typeof arr1); // object
console.log(arr1.length); // 6
console.log(arr1.indexOf(9999)); // 5

console.log(`[======================== Array 2 ===================================]`);
console.log(arr2);
console.log(typeof arr2); // object
console.log(arr2.length); // 7
console.log(arr2.indexOf(10111)); // -1

console.log(`[======================== Combined Array ===================================]`);
console.log([...arr1, ...arr2]);

console.log(`[======================== Function ===================================]`);
function add(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}
console.log(add(...arr1)); // 10014
