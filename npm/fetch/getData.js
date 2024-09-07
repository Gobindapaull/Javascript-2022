async function getData() {
    const url = "https://frontend-api.pump.fun/coins/BYXNn3Tjbs7hdihdwXscHYW4pNJaPP1xbRHc3FN4pump"
    const response = await fetch(url)
    const result = await response.json()
    console.log(result.mint)
    console.log(`symbol : ${result.symbol}`)
}

getData()
