const express = require('express')
const Route = express.Router()


const registerController = require('../controllers/register')

Route
  .all('/*')
  .get('/', registerController.getRegister)
  .post('/', registerController.addRegister)
  .delete('/:registerid', registerController.deleteRegister)
  .patch('/:registerid', registerController.updateRegister)

module.exports = Route
