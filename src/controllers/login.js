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
        console.log(data.username)
        try {
            const dbData = await loginModel.getLogin(data.username)
            const result = valid.validLogin(data, dbData)
            res.send(result)
            } catch(err) {
          console.log(err)
        }
      }

}