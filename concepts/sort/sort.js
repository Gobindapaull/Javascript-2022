const arr = [2, 1, 2, 4, 3];
arr.sort(); // default 
console.log(`sorted array: ${arr}`); // 1,2,2

arr.sort((a, b) => a - b) // ascending order
console.log(`Ascending order: ${arr}`); // 1,2,2,3,4

arr.sort((a, b) => b - a) // descending order
console.log(`Descending order: ${arr}`); // 4,3,2,2,1
