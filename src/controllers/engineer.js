require('dotenv/config')
const engineerModel = require('../models/engineer')
const JWT = require('jsonwebtoken')


module.exports = {
  getEngineer: (req, res) => {
    engineerModel.getEngineer()
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  searchEngineer: (req, res) => {
    const name = req.query.name
    const skill = req.query.skill
    const sortChoose = req.query.sortChoose
    const sortParams = req.query.sortParams
    const limit = req.query.limit
    const offset = req.query.offset
    engineerModel.searchEngineer(name, skill, sortChoose, sortParams, limit, offset)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
 
  addEngineer: (req, res) => {
    const { name, description, skill, location, dob, showcase,foto, dc, du, role_id } = req.body
    const data = {
      name,
      description,
      skill,
      location,
      dob,
      showcase,
      foto,
      dc : new Date(),
      du : new Date(),
      role_id
    }
    engineerModel.addEngineer(data)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log(err)
    })
  },
  deleteEngineer: (req, res) => {
    const engineerid = req.params.engineerid

    engineerModel.deleteEngineer(engineerid)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log(err)
    })
  },
  updateEngineer: (req, res) => {
    const engineerid = req.params.engineerid
    const { name, description, skill, location, dob, showcase, du, role_id} = req.body
    const data = {
      name,
      description,
      skill,
      location,
      dob,
      showcase,
      du : new Date()
    }
    engineerModel.updateEngineer(data, engineerid)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
