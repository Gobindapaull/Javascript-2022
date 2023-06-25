require('dotenv').config()

const Telebot = require('telebot')

const bot = new Telebot(process.env.TOKEN)

bot.on(['/start','/hello'], (msg) => {
    return bot.sendMessage(msg.from.id, `Hello, ${msg.from.first_name}`)
})

bot.start()
