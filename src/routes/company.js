const express = require('express')
const Route = express.Router()

const companyController = require('../controllers/company')
const { tokenVerify } =require('../helpers/auth')

Route
  .all('/*')
  .get('/',tokenVerify, companyController.getCompany)
  .post('/',tokenVerify, companyController.addCompany)
  .delete('/:companyid',tokenVerify, companyController.deleteCompany)
  .patch('/:companyid',tokenVerify, companyController.updateCompany)
  
module.exports = Route
