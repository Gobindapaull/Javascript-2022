import OpenAI from "openai";
import "dotenv/config";

const client = new OpenAI({
    apiKey: process.env.API_KEY
});

const input = "Write me a complex English vocabulary word";

const AI = async () => {
    const response = await client.chat.completions.create({
        model: 'gpt-4',
        messages: [
            {
                role: "user",
                content: input
            }
        ]
    });

    console.log(response.choices[0].message.content);

    // available models
    const model = await client.models.list();
    console.log(model.data);
}

AI();
