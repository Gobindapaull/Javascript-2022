require("dotenv").config()
const { Bot } = require("grammy")

const bot = new Bot(process.env.BOT_TOKEN)

bot.command("start", async (ctx) => {
    await ctx.reply("bot started ...")
})

bot.on("message", )

bot.start()
