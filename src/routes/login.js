const express = require('express')
const Route = express.Router()

const {getLogin} = require('../controllers/login')

Route
    .post('/', getLogin)


    module.exports = Route