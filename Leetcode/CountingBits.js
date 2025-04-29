function countingBit(n) {
    const binary = n.toString(2);
    console.log(`Binary representation: ${binary}`);

    const eachBinary = binary.split("");
    console.log(`Each binary: ${eachBinary}`);
    console.log(`Type of each binary: ${typeof eachBinary[0]}`);
    
    const numberOfBits = eachBinary.filter(bit => bit === "1").length;
    console.log(numberOfBits);
}

countingBit(5);
