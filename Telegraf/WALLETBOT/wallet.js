require("dotenv").config();
const { Telegraf } = require("telegraf");
const ethers = require("ethers");
const bot = new Telegraf(process.env.BOT_TOKEN);

const userWallets = {};

/** 
* /createWallet
*/
bot.command('createWallet', async (ctx) => {
    const userId = ctx.from.id;
    if (userWallets[userId]) {
        return ctx.reply(`🔐 You already have a wallet : ${userWallets[userId].address}`);
    }

    const wallet = ethers.Wallet.createRandom();

    userWallets[userId] = {
        address: wallet.address,
        privateKey: wallet.privateKey
    }

    ctx.reply(`🆕 Wallet created!\n\nAddress: ${wallet.address}\n\nKeep you private key secure`);

    await ctx.replyWithDocument({
        source: Buffer.from(wallet.privateKey),
        filename: `${wallet.address}.txt`
    });
});

/** 
* /balance
*/
bot.command('balance', async (ctx) => {
    const userId = ctx.from.id;
    const wallet = userWallets[userId];

    if (!wallet) {
        return ctx.reply(`❌ You have not wallet yet. Use /createWallet to make one.`);
    }

    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const balance = await provider.getBalance(wallet.address);

    ctx.reply(`💰 Your wallet balance : ${ethers.formatEther(balance)} BNB`);
});

/** 
* /wallet
*/
bot.command('wallet', (ctx) => {
    const wallet = userWallets[ctx.from.id];
    if (wallet) {
        ctx.reply(`💼 Your wallet address: \n${wallet.address}`);
    } else {
        ctx.reply(`❌ You have not wallet yet. Use /createWallet to make one.`);
    }
});

/** 
* /deposit
*/
bot.command('deposit', async (ctx) => {
    const wallet = userWallets[ctx.from.id];
    if (!wallet) {
        return ctx.reply(`❌ You have not wallet yet. Use /createWallet to make one.`);
    }
    ctx.reply(`🔑 To deposit BNB, send it to this wallet address:\n${wallet.address}`);
})

bot.launch();
/**
 * 
🛠️ Key Functionality Breakdown:

Create Wallet (/createwallet): Generates a new Ethereum wallet (BSC-compatible) and sends the address to the user.

Check Balance (/balance): Fetch the balance of the generated wallet, and displays it in BNB.

Deposit BNB (/deposit): Tells the user to send BNB to the bot’s wallet address.

Wallet Info (/wallet): Displays the wallet address associated with the Telegram user.

*/
