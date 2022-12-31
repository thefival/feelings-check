//built in packages
const path = require('path')

//third party packages
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const rootDir = require('./util/path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public'))) 

const userRoute = require('./routes/user')

app.use('/user-input', userRoute)

app.use('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'))
})

app.listen(3000)

