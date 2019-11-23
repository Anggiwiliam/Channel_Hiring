const express = require('express')
const Route = express.Router()

const engineer = require('./engineer')
const company = require('./company')
const register = require('./register')
const login = require('./login')
const logout = require('./logout')

Route
  .use('/engineer', engineer)
  .use('/company', company)
  .use('/register', register)
  .use('/login', login)
  .use('/logout', logout)
  


module.exports = Route
