const supabase = require("./db");

async function main() {
    const wallet = "0xCcE092c904928c120669DD1ba1b3A91d2DF30654";

    const { data, error } = await supabase.from("wallets").delete().eq("wallet", wallet).select();

    if (error) {
        console.log(error);
    } else {
        console.log(`DATA: ${JSON.stringify(data, null, 2)}`);
    }
}

main();
