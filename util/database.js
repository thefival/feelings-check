const mysql = require('mysql2')

// require('dotenv').config()

// const dotenv = require('../dotenv')
// dotenv.config()

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'feelings-check',
//     password: 'bangarang'
// })

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
})

module.exports = pool.promise()