require('dotenv').config()
const ethers = require('ethers')

const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL)
const Telebot = require('telebot')
const bot = new Telebot(process.env.TOKEN)


const address1 = "0x042523DB4F3Effc33d2742022B2490258494f8B3"


bot.on(['/start', '/hello'], async (msg) => {
   
    return bot.sendMessage(msg.from.id, `Hello, ${msg.from.first_name} \nEthereum Mainnet Wallet Balance:
    ${ethers.formatEther(await provider.getBalance(address1))} ETH`)
})

bot.start()
