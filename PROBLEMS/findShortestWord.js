function findShortestWord(str) {
    const words = str.split(" ");
    console.log(words);
    let shortest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
    console.log(shortest);
}

findShortestWord("The quick brown fox jumps over the lazy dog"); // The
