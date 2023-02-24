function connect() {
    document.getElementById('connect').addEventListener('click', () => {
        ethereum.request({
            method: 'eth_requestAccounts'
        }).then(accounts => {
            const account = accounts[0];
            document.getElementById('connect').innerHTML = account;
        })
    })
}
