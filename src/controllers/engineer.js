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
    engineerModel.searchEngineer(name, skill)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  sortEngineer: (req, res) => {
    const name = req.query.name
    const skill = req.query.skill
    const du = req.query.du
    engineerModel.sortEngineer(name, skill, du)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  pageEngineer : (req, res) => {
    const limit = req.query.limit
    const offset = req.query.offset
    engineerModel.pageEngineer(limit, offset)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log(err)
    })
  },
  addEngineer: (req, res) => {
    const { name, description, skill, location, dob, showcase, dc, du, role_id } = req.body
    const data = {
      name,
      description,
      skill,
      location,
      dob,
      showcase,
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
  },
  
  engineerGetToken: (req, res) => {
    const token = JWT.sign(
      { id: 1, name: 'Tatas Fachrul' },
      process.env.JWT_SECRET,
      {
        expiresIn: '30s'
      })

    response(res, 200, token)
  }
}
