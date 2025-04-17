require("dotenv").config();
const ethers = require("ethers");

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
console.log(`Wallet address: ${wallet.address}`);

async function sendTransaction() {
    try {
        const tx1 = {
            to: process.env.RECEIVER_ADDRESS,
            value: ethers.parseEther(process.env.AMOUNT_ETH)
        }
        const tx = await wallet.sendTransaction(tx1);
        console.log(`⏳ Waiting for confirmation...`);
        const receipt = await tx.wait();

        console.table({
            From: receipt.from,
            To: receipt.to,
            Hash: receipt.hash,
            Status: receipt.status ? "✅ Success" : "❌ Failed",
            Block: receipt.blockNumber,
            GasUsed: receipt.gasUsed.toString(),
            ETH_TRANSFER_AMOUNT: process.env.AMOUNT_ETH
        })
    } catch (error) {
        console.error("❌ Error sending transaction: ", error.message);
    }
}

sendTransaction();
