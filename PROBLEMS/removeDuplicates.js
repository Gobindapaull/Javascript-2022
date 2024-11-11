
const name = ["aa", "bb", "aa", "cc", "dd"];

function removeDuplicates(names) {
    return [...new Set(names)];
}

console.log(removeDuplicates(name));
// [ 'aa', 'bb', 'cc', 'dd' ]
