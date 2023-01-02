const express = require('express')
const path = require('path')
const rootDir = require('../util/path')

const userModel = require('../models/user')

exports.getPost = (req, res) => {


    console.log(req.body)
    res.sendFile(path.join(rootDir, 'views', 'blog.html'))
    
    // userModel.getAll()
    //     .then(( [rows, fieldData] ) => {
    //         // console.log(rows)
    //         res.sendFile(path.join(rootDir, 'views', 'blog.html'))
           
    //     })
        // .catch(err => console.log(err))
}