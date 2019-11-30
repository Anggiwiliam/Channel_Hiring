const express = require('express')
const Route = express.Router()

const { tokenVerify } = require('../helpers/auth')
const engineerController = require('../controllers/engineer')
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
  .get('/', engineerController.getEngineer)
  .post('/',upload.single('foto'), engineerController.addEngineer)
  .delete('/:engineerid',tokenVerify, engineerController.deleteEngineer)
  .patch('/:engineerid', engineerController.updateEngineer)
  .get('/search',tokenVerify, engineerController.searchEngineer)
  


module.exports = Route
