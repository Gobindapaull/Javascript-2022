const supabase = require("./db");

async function main() {

    const { data, error } = await supabase.from("wallets").delete().eq("balance", 0).select();

    if (error) {
        console.log(error);
    } else {
        console.log(`DATA: ${JSON.stringify(data, null, 2)}`);
    }
}

main();
