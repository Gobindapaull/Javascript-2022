const { LCDClient, MnemonicKey, MsgSend, SigningStargateClient } = require('@terra-money/terra.js');
const { Network, SigningStargateClient: StargateClient } = require('@cosmjs/stargate');

const MNEMONIC = '';
const SENDER_ADDRESS = 'terra162vpv32hkyj2p2fr0y6y4rnsy3uyqqnh9pxhz9';
const RECEIVER_ADDRESS = 'terra13t6r2pnwv3vevpcsgq5zzcs9lq5lkgnk649m8e';
const AMOUNT = '1000000';  // Amount to withdraw, in smallest unit (e.g., 1 LUNA = 1,000,000 uLUNA)

const client = new LCDClient({
    URL: 'https://columbus-lcd.terra.dev',  // Terra's mainnet URL;
    chainID: 'columbus-5',// Use 'columbus-5' for Terra Classic mainnet
    isClassic: true
});

async function autoWithdraw() {
    try {
        const mnemonicKey = new MnemonicKey({ mnemonic: MNEMONIC });
        const wallet = client.wallet(mnemonicKey);
        console.log(wallet.key.accAddress)

        const tx = await wallet.createAndSignTx({
            msgs: [
                new MsgSend(SENDER_ADDRESS, RECEIVER_ADDRESS, {
                    uluna: AMOUNT,
                }),
            ],
            // fee: {
            //     amount: [{ denom: 'uluna', amount: '1000000' }],  // Adjust fee amount as necessary
            //     gas: '200000',
            // },
            memo: 'Automated withdrawal',
        });

        const result = await client.tx.broadcast(tx);
        console.log('Transaction result:', result);
        console.log(`======================================================`)
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the withdraw function 3 seconds
setInterval(() => autoWithdraw(), 3 * 1000);  // 3 * 1000 ms = 3 seconds
