const states = new Map();

states.set('chsl', 'CHSL');
states.set('cgl', 'CGL');
states.set('ssc', 'Blockchain');

console.log(states);
// console.log(states.get('ssc'));
// console.log(states.get('abc'));
// console.log(states.has('ssc'));
// console.log(states.delete('cgl'));
// console.log(states);
// console.log(states.size);
// states.clear();
// console.log(states);
console.log(states.size);

        // Map.key()
for ( let key of states.keys()) {
    console.log(`${key} and ${states.get(key)}`);
}
        //Map.values()
for ( let value of states.values()) {
    console.log(value);
}
        //Map.entries()
for ( let entry of states.entries()) {
    console.log(entry);
}

const obj = {
    1 : "hi"
}
console.log(obj["1"]);
// console.log(obj[1]);  // same result
