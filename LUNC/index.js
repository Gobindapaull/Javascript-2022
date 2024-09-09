import { LCDClient, MnemonicKey } from '@terra-money/terra.js';

const terra = new LCDClient({
    URL: 'https://terra-classic-rpc.publicnode.com:443',
    chainID: 'columbus-5'
});

const mk = new MnemonicKey({
    mnemonic: "test test test test test test test test test test test test test test test test test test test test test test test test"
});
const mnemonic = terra.wallet(mk).key.mnemonic;
const wallet = terra.wallet(mk);

console.log(`============[Wallet INFO]===========`)

console.log(`[Mnemonic]: ${mnemonic}`)
console.log(`[wallet address]: ${wallet.key.accAddress}`);

console.log(`[Random address]: ${new MnemonicKey().accAddress}`);

console.log(`============[Terra classic INFO]===========`)

console.log(terra.config.URL)
console.log(terra.config.chainID)
console.log(terra.config.isClassic)
console.log(terra.config.gasPrices)
console.log(terra.config.gasAdjustment)

console.log(`============[x]===========`)
