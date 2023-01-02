const express = require('express')

const router = express.Router()

//controllers 
const userController = require('../controllers/user')

router.post('/', userController.getPost)

module.exports = router