const data = "aa       bb      cc"
let len = data.replace(/\s/g, "").length
let len2 = data.trim().length
let len3 = data.length

console.log(len, len2, len3)
