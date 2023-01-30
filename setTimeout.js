const waitTimeMs = 1000;
console.log('first');
const callback = () => {
    console.log('second');
}
setTimeout(callback, waitTimeMs);
console.log('third');

// first
// third
// second
