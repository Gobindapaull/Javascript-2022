// hi hello hey
bot.hears(['hi', 'hello', 'hey'], (ctx) => {
    ctx.reply("Welcome everyone")
})

// any text message
bot.on('text', (ctx) => {
    ctx.reply("Alright")
})
