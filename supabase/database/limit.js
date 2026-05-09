const supabase = require("./db");

async function main() {
    const { data } = await supabase.from("wallets").select("*").order("balance", { ascending: true }).limit(3);

    console.log(`Top 3 wallets: ${JSON.stringify(data, null, 2)}`);
}

main();
