const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const API_KEY = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash"
});

const prompt = "copy and paste command in linux";

const main = async () => {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

main();
