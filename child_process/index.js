const { exec, execFile, spawn, fork } = require("child_process");

// exec()
exec("ls; rm -rf test.txt; touch test.txt", (error, stdout, stderr) => {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(stdout);
    if (stderr) {
        console.log(stderr);
    }
})

// execFile()
execFile("node", ["--version"], (error, stdout, stderr) => {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(`Node version: ${stdout}`);
    if (stderr) {
        console.log(stderr);
    }
});
