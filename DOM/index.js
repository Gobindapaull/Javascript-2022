// Javascript DOM - classList

const element = document.querySelector(".heading")

const classes = ["class1", "class2", "class3"]
// add()
element.classList.add(...classes)
// remove()
element.classList.remove("class1")
// replace
element.classList.replace("class2", "active")

console.log(element.classList)
