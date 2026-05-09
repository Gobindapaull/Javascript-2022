const supabase = require("./db");

async function main() {
    const { data, error } = await supabase.from("wallets").select("*"); // .gt("balance", 0)

    if (error) {
        console.log(error);
    } else {
        console.log(`data: ${JSON.stringify(data, null, 2)}`);
    }
}

main();
