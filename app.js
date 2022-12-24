const express = require('express')

const app = express()

app.use('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.use('/user_input', (req, res) => {
    console.log(req)
})

app.listen(3000)

