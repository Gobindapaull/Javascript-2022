const { bot } = require('../core/bot')

bot.on('photo', ctx => {
    ctx.replyWithHTML("photo uploaded successfully !!")
})

bot.launch()
