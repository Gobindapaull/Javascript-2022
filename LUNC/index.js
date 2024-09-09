import { LCDClient, MnemonicKey, MsgSend } from '@terra-money/terra.js';

const terra = new LCDClient({
    URL: 'https://columbus-lcd.terra.dev',
    chainID: 'columbus-5',
    isClassic: true
});

const mk = new MnemonicKey({
    mnemonic: ""
});
const mnemonic = terra.wallet(mk).key.mnemonic;
const wallet = terra.wallet(mk);
const randomWallet = new MnemonicKey().accAddress;

console.log(`============[Wallet INFO]===========`)

// console.log(`[Mnemonic]: ${mnemonic}`)
console.log(`[wallet address]: ${wallet.key.accAddress}`);

console.log(`[Random address]: ${randomWallet}`);

console.log(`============[Terra classic INFO]===========`)

console.log(terra.config.URL)
console.log(terra.config.chainID)
console.log(terra.config.isClassic)
console.log(terra.config.gasPrices)
console.log(terra.config.gasAdjustment)

console.log(`============[x]===========`)

const bot = async () => {
    const balance = await terra.bank.balance(wallet.key.accAddress)
    console.log(`Total coins: ${balance[1].total}`)

    // create a simple message that moves coin balances
    const send = new MsgSend(
        wallet.key.accAddress,
        randomWallet,
        { uluna: 20000000 }
    );

    const tx = await wallet.createAndSignTx({
        msgs: [send],
        memo: 'Test from terra.js!',
    })
    const txResult = await terra.tx.broadcast(tx);
    const logs = txResult.raw_log;
    console.log(`Transaction successfull -> https://finder.station.money/classic/tx/${txResult.txhash}`)
    console.log(`Logs: ${logs}`)
}

bot()


