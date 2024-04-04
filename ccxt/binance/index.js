require("dotenv").config()
const ccxt = require("ccxt")

console.log(ccxt.exchanges)
console.log(`Total exchanges : ${ccxt.exchanges.length}`)

const binance = new ccxt.binance({
    apiKey : process.env.API_KEY,
    apiSecret: process.env.API_SECRET
})

const symbol = "BTC/USD"
const type = "limit"
const tradeAmount = "0.0001"
const profitThreshold = 10

const profit = async () => {
    const orderBook = await binance.fetchOrderBook(symbol)
    const askPrice = orderBook.asks[0][0]
    const bidPrice = orderBook.bids[0][0]

    console.log(orderBook.asks)

    try {
        const buy = await binance.createOrder(symbol, type, 'buy', tradeAmount, askPrice)
        const sell = await binance.createOrder(symbol, type, 'sell', tradeAmount, bidPrice)
    } catch (error) {
        console.log(error)
    }
}


profit()
