const { LCDClient, MnemonicKey, MsgSend, Fee, Coins } = require('@terra-money/terra.js');

// Configuration
const RPC_URL = 'https://columbus-lcd.terra.dev'; // or other RPC endpoint
const MNEMONIC = ''; // Securely store and use environment variables in production
const SENDER_ADDRESS = 'terra162vpv32hkyj2p2fr0y6y4rnsy3uyqqnh9pxhz9';
const DESTINATION_ADDRESS = 'terra13t6r2pnwv3vevpcsgq5zzcs9lq5lkgnk649m8e';

// Initialize Terra client
const terra = new LCDClient({
    URL: RPC_URL,
    chainID: 'columbus-5',
    isClassic: true
});

// Initialize key from mnemonic
const key = new MnemonicKey({ mnemonic: MNEMONIC });
const wallet = terra.wallet(key);
console.log(wallet.key.accAddress)

async function withdraw() {
    try {
        // block height
        const height = await terra.tendermint.blockInfo();
        console.log(`Height: ${height.block.header.height}`);

        // lunc balance
        const LuncBal = await terra.bank.balance(SENDER_ADDRESS);
        const LuncBalance = LuncBal[0].toIntCoins().toAmino()[0].amount;
        console.log(typeof LuncBalance); // string
        console.log(`LUNC balance: ${LuncBalance} LUNC`);

        // transaction fee
        const fee = new Fee(2000000, new Coins({ uluna: 150053740 }));
        const feeLog = fee.toData().amount[0].amount;
        console.log(typeof feeLog); // string
        console.log(`tax: ${feeLog / 1e6} LUNC`)

        // Amount to transfer
        const AMOUNT = LuncBalance - feeLog;
        console.log(typeof AMOUNT) // number
        console.log(AMOUNT)

        // Create a message to send LUNA
        const msg = new MsgSend(SENDER_ADDRESS, DESTINATION_ADDRESS, { uluna: AMOUNT });

        // Create a transaction

        const tx = await wallet.createAndSignTx({
            msgs: [msg],
            fee: fee,
            memo: 'Automated withdrawal'
        });

        // Broadcast the transaction
        const result = await terra.tx.broadcast(tx);

        console.log(`Withdrawal successful: https://finder.terra.money/classic/tx/${result.txhash}`);


    } catch (error) {
        console.error('Error occurred:', error);
    }
}

async function main() {
    while (true) {
        await withdraw();
        await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds
    }
}

main();
