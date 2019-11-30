const express = require('express')
const Route = express.Router()

const companyController = require('../controllers/company')
const { tokenVerify } =require('../helpers/auth')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null,'./src/assets/image');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' ||
  file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const  upload = multer({
  storage: storage,
  fileFilter:fileFilter
});

Route
  .all('/*')
  .get('/',tokenVerify, companyController.getCompany)
  .post('/', upload.single('logo'), companyController.addCompany)
  .delete('/:companyid',tokenVerify, companyController.deleteCompany)
  .patch('/:companyid',tokenVerify, companyController.updateCompany)
  
module.exports = Route
