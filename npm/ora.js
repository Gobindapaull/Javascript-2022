import ora from 'ora'
const spinner = ora('Starting ..').start();

setTimeout(() => {
	spinner.color = 'green';
	spinner.text = 'Fetching Tokens from pancakeswap router ...';
}, 2000);
