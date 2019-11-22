require('dotenv/config')
const registerModel = require('../models/register')
const bcrypt = require('bcryptjs')


module.exports = {
  getRegister: (req, res) => {
    registerModel.getRegister()
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  addRegister: (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      const { username, password, role_id } = req.body
      const data = {
        username,
        password: hash,
        role_id
      }
      registerModel.addRegister(data)
          .then(result => {
           res.json(result)
        })
      .catch(err => {
         console.log(err)
       })
    })
       
  },
  deleteRegister: (req, res) => {
    const registerid = req.params.registerid

    registerModel.deleteRegister(registerid)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log(err)
    })
  },
  updateRegister: (req, res) => {
    const registerid = req.params.registerid
    const { username, password} = req.body
    const data = {
        username,
        password
    }
    registerModel.updateRegister(data, registerid)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log(err)
    })
  }

}
