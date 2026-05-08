const supabase = require("./db");

async function main() {

    const { data, error } = await supabase
        .from("wallets")
        .select("*");

    console.log("DATA:", data);
    console.log("ERROR:", error);
}

main();
