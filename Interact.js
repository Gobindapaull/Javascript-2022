var Web3 = require('web3');
const presaleABI = require('./ABI.json');
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/');
var web3 = new Web3(provider);

console.log(web3);


async function connection() {
    accounts = await web3.eth.getAccounts();
    console.log(accounts);
}
connection();

async function createContractInstance() {
    var accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const { address } = presaleABI.network[networkId];
    var instance = await new web3.eth.Contract(presaleABI.abi, address);
    console.log('instance', instance.methods);
    return {accounts, instance};
}
