const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const pdf = require('pdf-parse');

const bot = new Telegraf("")

bot.start((ctx) => ctx.reply('Welcome'))

bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.on(message('sticker'), (ctx) => ctx.reply('👍'))

bot.on('document', async (ctx) => {
    const file = ctx.message.document;
    if (file.mime_type === "application/pdf") {
        const fileLink = await ctx.telegram.getFileLink(file.file_id)
        const response = await fetch(fileLink)
        const bufferData = await response.arrayBuffer()
        const data = await pdf(bufferData)
        ctx.reply(data.text)
    } else {
        ctx.reply("Pls send pdf file")
    }
})

bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch()
