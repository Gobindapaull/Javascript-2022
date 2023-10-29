const { bot } = require('../core/bot')

bot.help(ctx => {
    let text = `Help : \n` +
    `/start - start the bot\n` +
    `/buy - buy crypto token\n` +
    `/sell - sell crypto token\n` +
    `/wallet - settings wallet`

    ctx.replyWithHTML(text).then()
})

bot.launch()
