require('dotenv').config()

const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.TOKEN)

bot.start((ctx) => {
    ctx.reply('Welcome')
    ctx.reply(ctx.chat.username)
    console.log(ctx.updateType)
    console.log(ctx.telegram.token)
    console.log(ctx.telegram)
    console.log(ctx.message)
    console.log(ctx.chat.id)
    console.log(ctx.chat)
    console.log(ctx.from)
})


bot.launch()
