const input = require("input");
const { Telegraf } = require("telegraf");

const bot = new Telegraf("");

const userState = {};

// Start command
bot.start((ctx) => {
  ctx.reply("Welcome! Click /buy to start.");
});

// Step 1: ask for amount
bot.command("buy", (ctx) => {
  userState[ctx.from.id] = { step: "amount" };
  ctx.reply("Enter amount to buy:");
});

// Step 2: handle input
bot.on("text", (ctx) => {
  const state = userState[ctx.from.id];

  if (!state) return;

  // Step: amount
  if (state.step === "amount") {
    state.amount = ctx.message.text;
    state.step = "token";

    ctx.reply("Enter token address:");
  }

  // Step: token
  else if (state.step === "token") {
    state.token = ctx.message.text;
    state.step = "confirm";

    ctx.reply(
      `Confirm?\nAmount: ${state.amount}\nToken: ${state.token}\n\nType YES to confirm`
    );
  }

  // Step: confirm
  else if (state.step === "confirm") {
    if (ctx.message.text.toLowerCase() === "yes") {
      ctx.reply("✅ Order placed!");
      
      console.log("User Data:", state);

      delete userState[ctx.from.id];
    } else {
      ctx.reply("❌ Cancelled");
      delete userState[ctx.from.id];
    }
  }
});

bot.launch();


// USDT address = 0xdac17f958d2ee523a2206206994597c13d831ec7






 
