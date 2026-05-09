- https://www.npmjs.com/package/@supabase/supabase-js

** Setup Node.js
- npm init -y
- npm i dotenv ethers @supabase/supabase-js


** Create .env
- SUPABASE_URL=https://project_id.supabase.co
- SUPABASE_KEY

** Create Tables
- Database
- Tables > New table

** Create db.js
- import dotenv
- const { createClient }
- supabase 
- module.exports = supabase

** Save Wallet
- import ethers
- import supabase
- wallet
- const { data, error } = await supabase.from("wallets).insert([{
    wallet: wallet.address,
    private_key: wallet.privateKey,
    balance: 0
}]).select();
- console.log(`DATA: ${JSON.stringify(data, null, 2)}`);
- error

** get Wallet
- import supabase
- const {data, error} = await supabase.from("wallets).select("*");
- console.log(`DATA: ${JSON.stringify(data, null, 2)}`);
- error

** update Wallet
- import supabase
- const wallet = "0xCcE092c904928c120669DD1ba1b3A91d2DF30654";
- const {data, error} = await supabase.from("wallets").update({ "balance": 999 }).eq("wallet", wallet).select();
- console.log(`DATA: ${JSON.stringify(data, null, 2)}`);
- error

** delete Wallet
- import supabase
- const wallet = "0xCcE092c904928c120669DD1ba1b3A91d2DF30654";
- const {data, error} = await supabase.from("wallets").delete().eq("wallet", wallet).select();
- console.log(`DATA: ${JSON.stringify(data, null, 2)}`);
- error

