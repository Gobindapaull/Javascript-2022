//  "telegraf": "^4.16.3"
const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf("")

bot.command("trade", (ctx) => {
    ctx.reply("Choose an option: ",
        Markup.inlineKeyboard([
            [Markup.button.callback("buy", "buy_01")],
            [Markup.button.callback("sell", "sell_01")],
            [Markup.button.url("Visit Website", "https://bscscan.com/")],
        ])
    )
});

bot.on("callback_query", (ctx) => {
    const callbackData = ctx.callbackQuery.data;

    if (callbackData === "buy_01") {
        ctx.reply("buying ....");
    } else if (callbackData === "sell_01") {
        ctx.reply("selling ....");
    }

    ctx.answerCbQuery();
});

bot.launch();
console.log('bot is running ....');
