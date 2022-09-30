const arr = [ 14, "hi", 15, "last" ];

// for Loop
for ( let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// alternative for 
for (const item of arr) {
  console.log(item)
}

// forEach Loop

arr.forEach((item) => {
  console.log(item)
})
