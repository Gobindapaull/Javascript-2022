const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf("");

bot.start((ctx) => {
  ctx.reply(
    "Choose an option 👇",
    Markup.keyboard([
      ["🔥 Buy Bot", "💰 Sell Bot"],
      ["📊 Status"]
    ]).resize()
  );
});

// Button handlers
bot.hears("🔥 Buy Bot", (ctx) => {
  ctx.reply("Buying logic triggered 🚀");
});

bot.hears("💰 Sell Bot", (ctx) => {
  ctx.reply("Selling logic triggered 💸");
});

bot.hears("📊 Status", (ctx) => {
  ctx.reply("Bot is running ✅");
});

// Launch bot
bot.launch();
