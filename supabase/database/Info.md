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
- data
- error

** get Wallet
- import supabase
- const {data, error} = await supabase.from("wallets).select("*");
- data
- error

