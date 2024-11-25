
async function getCurrentBlockNumber() {
    try {
        const response = await fetch("https://blockstream.info/api/blocks/tip/height");
        const data = await response.json();
        console.log(new Date());
        console.log(`block number: ${data}`);
    } catch (error) {
        console.log(error);
    }
}
getCurrentBlockNumber()
