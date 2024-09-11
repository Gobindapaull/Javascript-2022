const { LCDClient } = require('@terra-money/terra.js');


// Configuration
const RPC_URL = 'https://columbus-lcd.terra.dev'; // or other RPC endpoint
const INTERVAL_MS = 5000 // 6 seconds

// Initialize Terra client
const terra = new LCDClient({
    URL: RPC_URL,
    chainID: 'columbus-5',
    isClassic: true
});

async function Height() {
    try {
        const height = await terra.tendermint.blockInfo()
        console.log(height.block.header.height)
       
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

async function startMonitoring() {
    console.log('Block height monitoring...');
    while (true) {
        await Height();
        await new Promise(resolve => setTimeout(resolve, INTERVAL_MS)); // Wait for the specified interval
    }
}
startMonitoring()
