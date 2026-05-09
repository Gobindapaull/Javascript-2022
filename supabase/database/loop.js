const supabase = require("./db");
const ethers = require("ethers");

async function main() {

    const provider = new ethers.JsonRpcProvider("https://rpc.flashbots.net");

    const { data } = await supabase.from("wallets").select("*");

    for (const w of data) {
        const bal = await provider.getBalance(w.wallet);
        console.log(`${w.wallet} ----- ${ethers.formatEther(bal)} ETH`);
    }
}

main();
