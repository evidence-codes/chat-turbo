const openai = require('../config/config')

const request = async (req, res) => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello world" }],
    });
    // console.log(completion.data.choices[0].message);
    res.json(completion.data.choices[0].message)
}

module.exports = request