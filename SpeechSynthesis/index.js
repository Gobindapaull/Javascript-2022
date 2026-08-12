const speakBtn = document.querySelector("#speakBtn");
const text = document.querySelector("#text");

speakBtn.addEventListener("click", () => {
    console.log('button clicked');
    const speech = new SpeechSynthesisUtterance(text.value);

    // speech.lang = "en-US"
    // speech.rate = 1.5
    speechSynthesis.speak(speech);
});
