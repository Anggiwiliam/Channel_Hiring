require('dotenv/config')
const uuid = require('uuid/v4')
const JWT = require('jsonwebtoken')
module.exports = {
  response: (res, status, data) => {
    const result = {}

    result.uuid = uuid()
    result.status = status
    result.result = data

    return res.status(result.status).json(result)
  },
  getjwt : () => {
    const pyload = {
      name: "seterahmu",
      uuid: "ntah"
    }
    const result = JWT.sign({pyload}, process.env)
    return (result)
  }
}
