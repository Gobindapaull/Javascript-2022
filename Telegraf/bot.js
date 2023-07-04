require('dotenv').config()
const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.TOKEN)

bot.start((ctx) => {
    ctx.reply(ctx.from.first_name + ' , Start command initiated')
    console.log(ctx.from)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)
})

// /test  /check  /testing
bot.command(['test', 'check', 'testing'], (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, `Welcome ${ctx.from.first_name}`,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Click Button', callback_data: 'clickButton'}
                ]
            
            ]
        }
    })
})

bot.action('clickButton', ctx => {
    ctx.answerCbQuery()
    ctx.reply('You clicked the button')
})
// hi hello hey
bot.hears(['hi', 'hello', 'hey'], (ctx) => {
    ctx.reply("Welcome everyone")
})

// any text message
// bot.on('text', (ctx) => {
//     ctx.reply("Alright")
// })

// any sticker message
bot.on('sticker', (ctx) => {
    ctx.reply('Sticker message')
})
// bot.on should be off when bot.mention is on (@price)
bot.mention("price", (ctx) => {
    ctx.reply("mention method is called")
})
// #hash 
bot.hashtag("hash", (ctx) => {
    ctx.reply('Hash tag method is called')
})

bot.launch()
