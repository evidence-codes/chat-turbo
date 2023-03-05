const express = require('express')
const app = express()
const port = process.env.PORT || 3060;
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
const request = require('./routes/requestRoute');
dotenv.config()

const corOption = {
    origin: "*"
}

app.use(bodyParser.json())
app.use(cors(corOption))

//routes
app.use('/api/chat', request)

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})