const data = {
    name: "ETH",
    price: 2500
}

console.log(JSON.stringify(data)); // {"name":"ETH","price":2500}
console.log(JSON.stringify(data, ["price"], "\t"));
// {
//     "price": 2500
// }
