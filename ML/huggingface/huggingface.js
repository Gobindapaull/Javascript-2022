const {pipeline} = require("@huggingface/transformers");

const main = async () => {
    const pipe = await pipeline("text-classification", "onnx-community/language_detection-ONNX");
    const out = await pipe("I Love You");
    console.log(out); // [ { label: 'POSITIVE', score: 0.9998656511306763 } ]
}

main();
