let bookTitle = [];
let authorTitle = [];
let numberOfCopies = [];

function createBookList(title, author, copies) {
    bookTitle.push(title);
    authorTitle.push(author);
    numberOfCopies.push(copies);
}

function addCopies(bookTitle, additionalCopies) {
    const index = bookTitle.indexOf(bookTitle)
    if (index !== -1) {
        numberOfCopies[index] += additionalCopies;
    }
}

function sellCopies(bookTitle, additionalCopies) {
    const index = bookTitle.indexOf(bookTitle)
    if (index !== -1) {
        numberOfCopies[index] -= additionalCopies;
    }
}

function getDetails() {
    for (let i = 0; i < bookTitle.length; i++) {
        console.log(`${bookTitle[i]}, ${authorTitle[i]}, ${numberOfCopies}`);
    }
}

createBookList("Quantum Physics", "Griffiths", 15);
addCopies("Quantum Physics", 3);
sellCopies("Quantum Physics", 10);
getDetails();
// Quantum Physics, Griffiths, 8
