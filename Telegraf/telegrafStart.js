const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.TOKEN)

// NUMBER
bot.hears('number', ctx => {
    const num = Math.floor(Math.random() * 2)
    ctx.reply(num == 0 ? "zero" : "not zero")
})

// PASSWORD
bot.hears('password', ctx => {
    let pass = ''
    const symbs = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i < 12; i++) {
        pass += symbs[Math.floor(Math.random() * symbs.length)]
    }
    ctx.reply(pass)
})

bot.launch()
