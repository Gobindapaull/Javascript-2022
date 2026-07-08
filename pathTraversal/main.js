const express = require("express")
const path = require("path")

const app = express()

app.get("/download", (req, res) => {
    const file = req.query.file;

    res.sendFile(path.join(__dirname, "uploads", file))
});

app.listen(3000, () => {
    console.log(`Server running`)
})

// http://localhost:3000/download?file=note.txt
// http://localhost:3000/download?file=../secret.txt
