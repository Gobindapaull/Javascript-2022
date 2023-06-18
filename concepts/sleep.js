async function main() {
    const name = "string!!"
    console.log(typeof name) // first line
    await sleep(2000) // 2 seconds stop
    console.log(name) // second line
}
main()

async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
