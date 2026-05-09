const ethers = require("ethers");
const supabase = require("./db");

async function main() {
    const wallet = ethers.Wallet.createRandom();
    console.log(`wallet : ${wallet.address}`);

    const provider = new ethers.JsonRpcProvider("https://rpc.flashbots.net");

    const bal = await provider.getBalance(wallet.address);
    const balance = ethers.formatEther(bal);

    const {data, error} = await supabase.from("wallets").insert([
        {
            wallet: wallet.address,
            private_key: wallet.privateKey,
            balance: balance
        }
    ]).select();

    if (error) {
        console.log(error);
    } else {
        console.log(`DATA: ${JSON.stringify(data, null, 2)}`);
    }
}

main();
