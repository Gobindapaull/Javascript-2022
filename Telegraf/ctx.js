bot.start((ctx) => {
    ctx.reply(ctx.from.first_name + ' , Start command initiated')
    console.log(ctx.from)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)
})
