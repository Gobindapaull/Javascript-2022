require("dotenv").config();

const { Telegraf } = require("telegraf");
const supabase = require('./db');

const waitingUsers = {};

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
    const telegram_id = ctx.from.id.toString();
    const username = ctx.from.username || "no_username";
    const first_name = ctx.from.first_name;

    const { data, error } = await supabase.from("users").insert([
        {
            telegram_id,
            username,
            first_name
        }
    ]).select();

    if (error) {
        console.log(error);
        ctx.reply(`Database error`);
    } else {
        ctx.reply(`✅ Saved In Database`);
        console.log(`data: ${JSON.stringify(data, null, 2)}`);
    }
});

bot.command("setwallet", async (ctx) => {

    waitingUsers[ctx.from.id] = true;

    ctx.reply("Send your wallet address");

});

bot.on("text", async (ctx) => {

    if (!waitingUsers[ctx.from.id]) return;

    const wallet = ctx.message.text;

    const telegram_id = ctx.from.id.toString();

    const { error } = await supabase
        .from("users")
        .update({
            wallet_address: wallet
        })
        .eq("telegram_id", telegram_id);

    if (error) {
        console.log(error);
        ctx.reply("❌ Failed To Save Wallet");
    } else {
        ctx.reply("✅ Wallet Saved");
    }

    delete waitingUsers[ctx.from.id];

});

bot.command("users", async (ctx) => {
    const { data, error } = await supabase.from("users").select("*");

    console.log(`Total users: ${data.length}`);
});

bot.launch();

console.log(`🚀 Bot is running ...`);

// Telegram User Database Bot
