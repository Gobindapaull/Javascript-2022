document.addEventListener("copy", (event) => {
    event.preventDefault();
    event.clipboardData.setData("text/plain", "Nigga");
    console.log("Fuck you Nigga");
    console.log(`Copied text: ${document.getSelection().toString()}`);
})
