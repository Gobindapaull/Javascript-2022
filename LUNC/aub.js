const { LCDClient, MnemonicKey, MsgSend, Fee, Coins } = require('@terra-money/terra.js');
const axios = require('axios');

// Configuration
const RPC_URL = 'https://columbus-lcd.terra.dev'; // or other RPC endpoint
const MNEMONIC = ''; // Securely store and use environment variables in production
const SENDER_ADDRESS = 'terra162vpv32hkyj2p2fr0y6y4rnsy3uyqqnh9pxhz9';
const DESTINATION_ADDRESS = 'terra13t6r2pnwv3vevpcsgq5zzcs9lq5lkgnk649m8e';
const AMOUNT = 1000000; // Amount to send in uluna (1 LUNA = 1,000,000 uluna)

// Initialize Terra client
const terra = new LCDClient({
    URL: RPC_URL,
    chainID: 'columbus-5',
    isClassic: true
});

// Initialize key from mnemonic
const key = new MnemonicKey({ mnemonic: MNEMONIC });
const wallet = terra.wallet(key);

async function withdraw() {
    try {
        const height = await terra.tendermint.blockInfo();
        console.log(`Height: ${height.block.header.height}`);

        // Create a message to send LUNA
        const msg = new MsgSend(SENDER_ADDRESS, DESTINATION_ADDRESS, { uluna: AMOUNT });

        // Create a fee (adjust the amount based on network conditions)
        // const fee = new StdFee(200000, { uluna: 5000 });
        const fee = new Fee(2000000, new Coins({ uluna: 126053740  }));

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
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
    }
}

main();
