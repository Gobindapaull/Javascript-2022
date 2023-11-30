const { Telegraf } = require('telegraf')
require('dotenv').config()
const BOT_TOKEN = process.env.BOT_TOKEN

const bot = new Telegraf(BOT_TOKEN)

bot.start(ctx => {
    ctx.reply("Welcome")
    ctx.reply("I am crypto boTTT")
})

bot.launch()
