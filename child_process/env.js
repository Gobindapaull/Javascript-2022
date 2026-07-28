const { exec } = require("child_process");
require("dotenv").config();

// exec()
exec("echo $PRIVATE_KEY", {
    env: process.env
}, (error, stdout, stderr) => {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(stdout);
    if (stderr) {
        console.log(stderr);
    }
})
