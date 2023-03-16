const openai = require('../config/config');
const { ResponseHandler } = require('../utils');


const request = async (req, res) => {

    try {
        const { message } = req.body
        console.log(message)
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `${message}` }],
        });
        ResponseHandler(res, data = completion.data.choices[0].message, error = null, status = 200)
    } catch (err) {
        ResponseHandler(res, data = 'There was an issue with the server...', error = err, status = 400)
    }

}

module.exports = request