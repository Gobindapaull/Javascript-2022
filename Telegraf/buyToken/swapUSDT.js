const { Telegraf } = require("telegraf");
const { ethers } = require("ethers");

const bot = new Telegraf("");

const RPC_URL = "https://eth.llamarpc.com";

// Uniswap Router
const routerAddress = "0x7a250d5630b4cf539739df2c5dacab4c659f2488";

const routerABI = [
  "function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) payable returns (uint[] memory amounts)"
];

const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const WETH = "0xC02aaA39b223FE8D0A0E5C4F27eAD9083C756Cc2";

const userState = {};

bot.start((ctx) => {
  ctx.reply("Welcome!\nUse /buy to purchase USDT");
});

// Step 1 → ask private key
bot.command("buy", (ctx) => {
  userState[ctx.from.id] = { step: "privateKey" };
  ctx.reply("🔑 Enter your private key:");
});

// Handle input
bot.on("text", async (ctx) => {
  const state = userState[ctx.from.id];
  if (!state) return;

  // Step: private key
  if (state.step === "privateKey") {
    try {
      // validate key
      const wallet = new ethers.Wallet(ctx.message.text);

      state.privateKey = ctx.message.text;
      state.address = wallet.address;
      state.step = "amount";

      ctx.reply(`✅ Wallet loaded: ${wallet.address}\nEnter ETH amount:`);
    } catch {
      return ctx.reply("❌ Invalid private key");
    }
  }

  // Step: amount
  else if (state.step === "amount") {
    if (isNaN(ctx.message.text)) {
      return ctx.reply("❌ Enter valid ETH amount");
    }

    state.amount = ctx.message.text;
    state.step = "confirm";

    ctx.reply(`Swap ${state.amount} ETH → USDT?\nType YES to confirm`);
  }

  // Step: confirm + execute
  else if (state.step === "confirm") {
    if (ctx.message.text.toLowerCase() !== "yes") {
      ctx.reply("❌ Cancelled");
      delete userState[ctx.from.id];
      return;
    }

    try {
      const provider = new ethers.JsonRpcProvider(RPC_URL);
      const wallet = new ethers.Wallet(state.privateKey, provider);

      const router = new ethers.Contract(routerAddress, routerABI, wallet);

      const amountIn = ethers.parseEther(state.amount);
      const path = [WETH, USDT];
      const deadline = Math.floor(Date.now() / 1000) + 600;

      ctx.reply("⏳ Sending transaction...");

    //   const tx = await router.swapExactETHForTokens(
    //     0, // ⚠️ set slippage later
    //     path,
    //     wallet.address,
    //     deadline,
    //     { value: amountIn }
    //   );

    //   ctx.reply(`📤 TX: ${tx.hash}`);

    //   await tx.wait();

      ctx.reply("✅ Swap completed!");

    } catch (err) {
      console.log(err);
      ctx.reply("❌ Transaction failed");
    }

    // 🔥 VERY IMPORTANT → clear sensitive data
    delete userState[ctx.from.id];
  }
});

bot.launch();

// USDT buying telegram bot


// demo private key = 0xb0ed81106021bd82b1c2f60d3c5e3f581affc2632e810691c53b5138003228e7
