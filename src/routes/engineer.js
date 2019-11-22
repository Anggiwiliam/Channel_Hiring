const express = require('express')
const Route = express.Router()

const { tokenVerify } = require('../helpers/auth')
const engineerController = require('../controllers/engineer')

Route
  .all('/*')
  .get('/',tokenVerify, engineerController.getEngineer)
  .post('/',tokenVerify, engineerController.addEngineer)
  .delete('/:engineerid',tokenVerify, engineerController.deleteEngineer)
  .patch('/:engineerid',tokenVerify, engineerController.updateEngineer)
  .get('/search',tokenVerify, engineerController.searchEngineer)
  .get('/sort',tokenVerify, engineerController.sortEngineer)
  .get('/page',tokenVerify, engineerController.pageEngineer)


module.exports = Route
