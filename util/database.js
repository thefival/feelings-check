const mysql = require('mysql2')

// const dotenv = require('../dotenv')
// dotenv.config()

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'feelings-check',
    password: 'bangarang'
})

// const pool = mysql.createPool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     database: process.env.DATABASE,
//     password: process.env.DATABASE
// })

module.exports = pool.promise()