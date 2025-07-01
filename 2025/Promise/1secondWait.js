const bot = async () => {
    while (true) {
        await new Promise(res => setTimeout(res, 1000));
        console.log(`Wait 1 second ...`);
    }
}

bot();
