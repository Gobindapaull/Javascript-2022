
const name = ["aa", "bb", "aa", "cc", "dd"];

function removeDuplicates(names) {
    return [...new Set(names)];
}

console.log(removeDuplicates(name));
// [ 'aa', 'bb', 'cc', 'dd' ]


// Removes duplicates
const arr = [1, 2, 2, 3, 3, 4, 4, 5, 6]

const unique = [...new Set(arr)]
console.log(unique)
