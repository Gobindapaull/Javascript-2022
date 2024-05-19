import { Telegraf } from "telegraf"
// require("dotenv").config()
import "dotenv/config"

import { showMenu, closeMenu } from "./menu.js"
import { getCat } from "./cat.js"

const token = process.env.BOT_TOKEN
const cat = process.env.CAT_URL

console.log(token)
console.log(cat)

const bot = new Telegraf(token)
// console.log(bot)

bot.start((ctx) => ctx.reply("Solana Hard Sniper Bot"))

bot.on("message", async (ctx) => {
    const chatId = ctx.chat.id
    
    if(ctx.message.text == "hi") {
        showMenu(bot, chatId)
    } else if (ctx.message.text == "cat") {
        let cat = await getCat()
        ctx.reply(cat)
    } else {
        closeMenu(bot, chatId)
    }
})

bot.launch()

// console.log(Telegraf)
