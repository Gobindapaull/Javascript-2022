let counter = 0

let timeId = setInterval(() => {
    if (counter === 5) {
        clearInterval(timeId)
    }
    console.log(counter++)
}, 1000)
