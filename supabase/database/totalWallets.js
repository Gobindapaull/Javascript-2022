const supabase = require("./db");

async function main() {
    const { count } = await supabase.from("wallets").select("*", { count: "exact", head: true});

    console.log(`Total wallets: ${count}`);
}

main();
