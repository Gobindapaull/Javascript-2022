require("dotenv").config();

const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {

    ctx.reply(`
╔══════════════════╗
   TOKEN TAX BOT
╚══════════════════╝

📥 Input Format:

Amount BuyTax BurnTax MarketingTax

🧾 Example:

1000 5 2 3

━━━━━━━━━━━━━━━

💰 Amount = 1000
🔥 Buy Tax = 5%
♻️ Burn Tax = 2%
📢 Marketing Tax = 3%

━━━━━━━━━━━━━━━

🤖 Bot will calculate:
✅ Total Tax
✅ Burn Amount
✅ Marketing Amount
✅ Final Tokens Received
`);

});

bot.on("text", (ctx) => {

    try {

        const args =
            ctx.message.text.split(" ");

        // Validate Input

        if (args.length < 4) {

            return ctx.reply(`
❌ Invalid Format

✅ Correct Example:
1000 5 2 3
`);

        }

        // Convert To Numbers

        const amount =
            Number(args[0]);

        const buyTax =
            Number(args[1]);

        const burnTax =
            Number(args[2]);

        const marketingTax =
            Number(args[3]);

        // Check Numbers

        if (
            isNaN(amount) ||
            isNaN(buyTax) ||
            isNaN(burnTax) ||
            isNaN(marketingTax)
        ) {

            return ctx.reply(
                "❌ Please enter only numbers"
            );

        }

        // Calculations

        const buyTaxAmount =
            (amount * buyTax) / 100;

        const burnTaxAmount =
            (amount * burnTax) / 100;

        const marketingTaxAmount =
            (amount * marketingTax) / 100;

        const totalTax =
            buyTaxAmount +
            burnTaxAmount +
            marketingTaxAmount;

        const finalAmount =
            amount - totalTax;

        // Reply

        ctx.reply(`
╔════════════════════╗
      TAX REPORT
╚════════════════════╝

💰 Amount:
${amount}

🔥 Buy Tax:
${buyTaxAmount}

♻️ Burn Tax:
${burnTaxAmount}

📢 Marketing Tax:
${marketingTaxAmount}

━━━━━━━━━━━━━━━━━━

💸 Total Tax:
${totalTax}

✅ Final Tokens:
${finalAmount}

🚀 Calculation Complete
`);

    } catch (error) {

        console.log(error);

        ctx.reply(
            "❌ Something went wrong"
        );

    }

});

bot.launch();

console.log("🚀 Bot is running...");

// Token Tax Calculator Bot
