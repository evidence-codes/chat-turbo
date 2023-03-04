const express = require('express')
const app = express()
const port = 3060
const dotenv = require('dotenv')
dotenv.config()

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function chat() {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello world" }],
    });
    console.log(completion.data.choices[0].message);
    // return completion.data.choices[0].message.content
}

chat()

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})