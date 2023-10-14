const ethers = require("ethers");

const ABI = require("./ABI.json");

const privateKey =
  "";
const tokenAddress = "";

const provider = new ethers.JsonRpcProvider("https://polygon-rpc.com/");

const wallet = new ethers.Wallet(privateKey);

const signer = wallet.connect(provider);
const tokenContract = new ethers.Contract(tokenAddress, ABI, signer);


const start = async () => {

  for (let i = 0; i < 1000; i++) {
    const receiver = ethers.Wallet.createRandom().address;
    const amount = 50000000000000000n;
    const transfe = await tokenContract.transfer(receiver, amount);
    const transfer = await transfe.wait();
    console.log("Tx hash: ", transfer.hash);
    console.log(`transfer ${amount} tokens`);
  }
};
start();
