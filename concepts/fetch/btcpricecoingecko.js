
const main = async () => {
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
    const data = await response.json();
    const price = data.bitcoin.usd;
    console.log(`BTC PRICE : ${price} USD`);
}

setInterval(main, 5000);
