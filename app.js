const express = require('express')
const app = express()
const port = 3060
const dotenv = require('dotenv')
const request = require('./routes/request')
dotenv.config()


app.use('/api', request)

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})