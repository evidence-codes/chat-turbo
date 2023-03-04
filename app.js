const express = require('express')
const app = express()
const port = 3060


app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})