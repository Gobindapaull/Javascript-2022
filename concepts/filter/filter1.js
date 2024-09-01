const input = ["abcd", "aa", "aaa", "bbbbb"]


function four(e) {
    e.filter(name => {
        if (name.length == 4) {
            console.log(name)
        }
    })
}

four(input)
