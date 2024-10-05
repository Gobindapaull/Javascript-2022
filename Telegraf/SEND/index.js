const ethers = require("ethers");
const telegraf = require("telegraf");

const bot = new telegraf.Telegraf("");

const PRIVATE_KEY = ''; 

const provider = new ethers.JsonRpcProvider('https://rpc.ankr.com/bsc_testnet_chapel');

const wallet = new ethers.Wallet(PRIVATE_KEY, provider);


bot.start((ctx) => {
    ctx.reply("Welcome! /balance <address> to check ETH Balance.");
})

// balance check command

bot.command('balance', async (ctx) => {
    const args = ctx.message.text.split(' ').slice(1);
    const address = args[0];
    console.log(address);

    if (!ethers.isAddress(address)) {
        return ctx.reply("Please provide a valid Ethereum address.");
    }

    try {
        const balance = await provider.getBalance(address);
        const formattedBalance = ethers.formatEther(balance);
        ctx.reply(`Balance for ${address} : ${formattedBalance} ETH`);
    } catch (error) {
        console.error(error);
    }
});

// Send eth command

bot.command('send', async (ctx) => {
    const args = ctx.message.text.split(' ').slice(1);
    const recipient = args[0];
    const amount = args[1];

    if (!ethers.isAddress(recipient)) {
        return ctx.reply('Please provide a valid Ethereum address.');
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        return ctx.reply('Please provide a valid amount of ETH to send.');
    }

    try {
        const tx = {
            to: recipient,
            value: ethers.parseEther(amount)
        }
        const transaction = await wallet.sendTransaction(tx);
        await transaction.wait();
        ctx.reply(`Successfully sent ${amount} ETH to ${recipient}. Transaction hash ${transaction.hash}`);

        console.log(`Successfully sent ${amount} ETH to ${recipient}. Transaction hash ${transaction.hash}`);
    } catch (error) {
        console.log(error);
    }

})

bot.launch().then(() => {
    console.log(`Bot is running ...`);
}).catch((error) => {
    console.error(error);
})

// "dependencies": {
//     "ethers": "^6.13.3",
//     "telegraf": "^4.16.3"
//   }
