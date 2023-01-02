require('dotenv').config() //env config

//built in packages
const path = require('path')

//third party packages
const express = require('express')
const bodyParser = require('body-parser')

const db = require('./util/database')

const app = express()

const rootDir = require('./util/path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public'))) 

const userRoute = require('./routes/user')

app.use('/log-in', userRoute)
// app.use('/user-input', userRoute)

app.use('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'log-in.html'))
})

app.listen(3000)

// test

