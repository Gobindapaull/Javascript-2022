const {jsPDF} = require('jspdf')

// console.log(jsPDF)

const doc = new jsPDF()
doc.text("js pdf", 10, 10)
doc.save("jspdf.pdf")
