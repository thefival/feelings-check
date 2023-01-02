const express = require('express')

const userModel = require('../models/user')

exports.getPost = (req, res) => {
    // console.log(req.body)
    userModel.getAll()
        .then(( [rows, fieldData] ) => {
            console.log(rows)
            // console.log(fieldData)
        })
        .catch(err => console.log(err))
}