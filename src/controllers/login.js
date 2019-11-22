require('dotenv/config')
const loginModel = require('../models/login')
const valid = require('../helpers/auth')

module.exports = {
    getLogin: async (req, res) => {
        const { username, password } = req.body
        const data = {
          username,
          password
        }
        try {
            const pass = await loginModel.getLogin(data.username)
            const result = valid.validLogin(data, pass)
          
             res.send(result)
            }
        catch(err) {
          console.log(err)
        }
      }

}