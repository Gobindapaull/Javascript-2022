const { SigningStargateClient, StargateClient } = require('@cosmjs/stargate');
const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');

const RPC_URL = "https://cosmos-rpc.publicnode.com:443/9a353f27b9e92ea909491d7ae2102facbd105fb06ff969932dd19cb31d93d0a6";

const MNEMONIC = "";
const FROM_ADDRESS = "";
const TO_ADDRESS = "";
const AMOUNT = 1000; // 1 ATOM = 1000000 uatom

const Withdraw = async () => {

    try {
        // WALLET IMPORT
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(MNEMONIC);
        const account = await wallet.getAccounts();
        const accountAddress = account[0].address;
        console.log(`Wallet address: ${accountAddress}`);

        const client = await SigningStargateClient.connectWithSigner(RPC_URL, wallet);

        // CHAIN ID
        const CHAIN_ID = await client.getChainId();
        console.log(`Chain ID: ${CHAIN_ID}`);

        // HEIGHT
        console.log(`Height: ${await client.getHeight()}`);

        // TOKEN NAME AND BALANCE
        const balance = await client.getAllBalances(accountAddress);
        const atomBalance = balance[0].amount;
        console.log(`atom balance: ${atomBalance}`);
        console.log(`denom: ${balance[0].denom} and amount : ${atomBalance / 1e6} ATOM`);

        // Create a transaction
        const fee = {
            amount: [{ denom: 'uatom', amount: '5000' }],
            gas: '200000',
        };
        
        console.log(`amount: ${AMOUNT / 1e6}`);

        const amount = [{ denom: 'uatom', amount: AMOUNT }];

        const tx = await client.sendTokens(FROM_ADDRESS, TO_ADDRESS, amount, fee, "ATOM AUTO WITHDRAWAL")
        console.log(`Tx successful: https://www.mintscan.io/cosmos/tx/${tx.transactionHash}`);

    } catch (error) {
        console.error('Error withdrawing:', error.message);
    }
};


async function main() {
    while (true) {
        await Withdraw();
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
    }
}

main();
