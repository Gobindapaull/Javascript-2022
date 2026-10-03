function Zigzag(s, numRows) {
    const order = [...new Array(numRows).keys()]
    order.push(...order.slice(1, -1).reverse())

    const rows = new Array(numRows).fill('')
    
    Array.from(s).forEach((c, i) => {
        rows[order[i % order.length]] += c
    });
    console.log(rows.join(''))
}

const s = "PAYPALISHIRING"
const numRows = 3

Zigzag(s, numRows)
