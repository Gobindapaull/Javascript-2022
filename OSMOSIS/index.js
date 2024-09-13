const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');
const { StargateClient, SigningStargateClient } = require('@cosmjs/stargate');


// Configuration
const rpcUrl = 'https://rpc.osmosis.zone';
const mnemonic = '';
const recipientAddress = 'osmo1fs5zt43fcfvtfpqx92a7zmmqe4mptq7c7ap30j';
const withdrawalAmount = 1000000; // (1 ATOM = 1,000,000 uatom)


const withdraw = async () => {

    // const key = "0xa3c4fae871d1d51cffab4a1109b086517f220eadab5e863f7d833713fc169e68";
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
    const account = await wallet.getAccounts();
    const accountAddress = account[0].address;
    console.log(accountAddress);


    try {

        const x = await SigningStargateClient.connectWithSigner(rpcUrl, wallet);
        // console.log(x.sign());
        const client = await StargateClient.connect(rpcUrl);
        console.log(`Chain ID: ${await client.getChainId()}`); // osmosis-1
        console.log(`Height: ${await client.getHeight()}`); // 20771827

        // console.log(await client.getBalance("osmo1vqy8rqqlydj9wkcyvct9zxl3hc4eqgu3d7hd9k", "uatom"));
        // console.log(await client.getAllBalances("osmo1vqy8rqqlydj9wkcyvct9zxl3hc4eqgu3d7hd9k"));

        const amount = [{ denom: 'uosmo', amount: withdrawalAmount }];

        const fee = {
            amount: [{ denom: 'uosmo', amount: '5000' }],
            gas: '200000',
        };

        // const msgSend = {
        //     fromAddress: accountAddress,
        //     toAddress: recipientAddress,
        //     amount: [{ denom: 'uatom', amount: withdrawalAmount }],
        // };

        // const tx = {
        //     messages: [msgSend],
        //     fee,
        //     memo: 'Automated withdrawal',
        // };

        const res = await x.sendTokens(accountAddress, recipientAddress, amount, fee, "OSMOSIS AUTO WITHDRAWAL");
        // const result = await client.broadcastTx(tx);
        console.log('Withdrawal successful:', res.transactionHash);
    } catch (error) {
        console.error('Error performing withdrawal:', error);
    }
};

async function main() {
    while (true) {
        await withdraw();
        await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds
    }
}

main();
