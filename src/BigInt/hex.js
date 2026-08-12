const hex = "0x123456789abcdef";
const value = BigInt(hex);
const value1 = BigInt("0x10");
const value2 = BigInt("0xff");
const hash = BigInt("0x9a72f860f933a4315a76e9004a0f94040615962bcfd4addb6eeac83e6dc71cde");

console.log(value); // 81985529216486895n
console.log(typeof value); // bigint
console.log(`value 1: ${value1}`); // 16
console.log(`value 2: ${value2}`); // 255

console.log(`Hash: ${hash} | length: ${hash.toString(16).length}`);
// Hash: 67206468970341576640336435540376457761566052986082313355490800518212780706813 | length: 64
