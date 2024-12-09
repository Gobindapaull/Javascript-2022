import { Account, Aptos, APTOS_COIN, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const config = new AptosConfig({ network: Network.MAINNET });
const aptos = new Aptos(config);

const main = async () => {
    console.log(APTOS_COIN);

    // Generate sender and receiver accounts
    const sender = Account.generate();
    console.log(`Sender address: ${sender.accountAddress.toString()}`);

    const receiver = Account.generate();
    console.log(`Receiver address: ${receiver.accountAddress.toString()}`);

    // Transfer amount in micro APT (1 APT = 10^8 micro APT)
    const transferAmount = 100;

    // Fund sender account (replace with your funding mechanism if needed)
    console.log("⚠️ Ensure sender has enough APT for this transaction!");

    // Build transaction payload
    const tx = await aptos.transaction.build.simple({
        sender: sender.accountAddress,
        data: {
            function: "0x1::coin::transfer",
            typeArguments: [APTOS_COIN],
            functionArguments: [receiver.accountAddress, transferAmount],
        },
    });

    console.log("----- Transfer transaction -----");

    // Sign and submit transaction
    const commitedTx = await aptos.signAndSubmitTransaction({
        signer: sender,
        transaction: tx,
    });

    // Wait for transaction confirmation
    await aptos.waitForTransaction({
        transactionHash: commitedTx.hash,
    });

    console.log(`✅ Committed transaction: ${commitedTx.hash}`);
};

main().catch((error) => console.error("❌ Error occurred:", error));
