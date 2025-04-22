const { Telegraf } = require("telegraf");
const { ethers } = require("ethers");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

let userChatId = null;

provider.on("block", async (block) => {
    console.log(`🧱 New Block: ${block}`);

    if (!userChatId) {
        console.log(`⚠️ No user chat id found`);
        return;
    }

    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'View Block Info',
                        callback_data: `block_${block}`,
                        url:`https://etherscan.io/block/${block}`
                    }
                ]
            ]
        }
    };

    try {
        await bot.telegram.sendMessage(userChatId, `🚨 New Block #${block}`, keyboard);
    } catch (error) {
        console.log(`Error sending message: `, error);
    }
});

bot.start((ctx) => {
    userChatId = ctx.chat.id;
    console.log(`💬 User started the bot! Chat ID: ${userChatId}`);
    ctx.reply(`Bot started! You will receive updates for new Ethereum blocks`);
});

bot.launch();
