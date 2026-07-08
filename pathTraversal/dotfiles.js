const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()

app.get("/download", (req, res) => {
    const file = req.query.file;
    const filePath = path.join(__dirname, "uploads", file);

    console.log("Requested:", file);
    console.log("Resolved:", filePath);
    console.log("Exists:", fs.existsSync(filePath));

    res.sendFile(filePath, { dotfiles: "allow" });
    // res.sendFile() intentionally blocks dotfiles (files beginning with .) by default
});

app.listen(3000, () => {
    console.log(`Server running`)
})

// http://localhost:3000/download?file=../.env
