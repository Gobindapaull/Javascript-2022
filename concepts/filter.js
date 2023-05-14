const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
]

let invalidEntries = 0

function filterById(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true
    }
    invalidEntries++
    return false
}

const arrayById = arr.filter(filterById)
console.log('Filtered Array: ', arrayById)

console.log('Number of Invalid Entries: ', invalidEntries)

// Filtered Array:  [ { id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 } ]
// Number of Invalid Entries:  5
