function onDetected() {
    const result = document.querySelector("#result");
    result.innerText = `Detected`;
}

function consoleCheck() {
    const trapObject = {};
    Object.defineProperty(trapObject, "CLIENT_TOKEN", {
        get: () => {
            onDetected();
            return "12345678901234567890";
        },
        enumerable: true
    });
    console.log("%c Debug", "color: green; font-size:20px; font-weight:bold;");
    console.log(trapObject);
}

consoleCheck();
