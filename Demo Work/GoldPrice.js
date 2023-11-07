require('dotenv').config()

var myHeaders = new Headers();
myHeaders.append("x-access-token", process.env.API_KEY);
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const price = async () => {
    const p = await fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
    const pr = await p.json()
    console.log(`Gold price per gram : ${pr.price_gram_24k}$`)
}

price()
