const ethers = require("ethers");
const supabase = require("./db");

async function main() {
    const wallet = ethers.Wallet.createRandom();
    console.log(`wallet address: ${wallet.address}`);


    const { data, error } = await supabase
        .from("wallets")
        .insert([
            {
                wallet: wallet.address,
                private_key: wallet.privateKey,
                balance: 0
            }
        ])
        .select();

    console.log("DATA:", data);
    console.log("ERROR:", error);
}

main();
