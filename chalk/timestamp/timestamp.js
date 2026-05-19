const chalk = require("chalk").default;

function timestamp() {

    const now = new Date();

    return now.toLocaleString("en-GB", {
        timeZone: "UTC",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }) + " GMT";
}

console.log(
    chalk.gray("[") +
    chalk.cyan(timestamp()) +
    chalk.gray("]")
);
