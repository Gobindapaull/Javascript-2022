const factorial = async (n) => {
    try {
        if (n < 0) throw new Error("Negative input not allowed");
        if (n <= 1) return 1;

        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log(`Calculating factorial of ${n}`);
        return n * await factorial(n - 1);
    } catch (error) {
        console.log(error);
    }
}

factorial(5).then(result => console.log(`result : ${result}`)).catch(error => console.log(error));
