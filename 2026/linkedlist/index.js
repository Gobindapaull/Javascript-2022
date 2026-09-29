// Create a Node
function createNode(value) {
    return {
        value: value,
        next: null
    }
}

function createLinkedList() {
    let head = null

    function append(value) {
        const newNode = createNode(value)

        // Empty list
        if (head === null) {
            head = newNode
            return
        }

        // Find last node
        let current = head
        while(current.next !== null) {
            current = current.next
        }

        // Connect last node to new node
        current.next = newNode
    }
    function print() {
        let current = head

        while(current !== null) {
            console.log(current.value)
            current = current.next // heart of linked-list traversal
        }
    }

    return {
        append,
        print
    }
}


const list = createLinkedList()
list.append(10)
list.append(20)
list.append(30)

list.print()


// head
//  ↓
// [10 | •] → [20 | •] → [30 | null]

