const openai = require('../config/config');
const { ResponseHandler } = require('../utils');


const request = async (req, res) => {
    const { message } = req.body
    console.log(message)
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `${message}` }],
    });
    // res.json({
    //     // data: response.data
    //     message: response.data.choices[0].text
    // })

    ResponseHandler(res, data = completion.data.choices[0].message, error = null, status = 200)
}

module.exports = request