const express = require('express')
const Route = express.Router()
const {jwtdestroy} = require('../controllers/logout')

Route
 .patch('/', jwtdestroy)

module.exports = Route