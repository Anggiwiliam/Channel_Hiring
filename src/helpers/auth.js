require('dotenv/config')
const uuid = require('uuid/v4')
const bcrypt = require('bcryptjs')

const JWT = require('jsonwebtoken')

module.exports = {
  
  tokenVerify: (req, res, next) => {
    const token = req.headers.authorization
    console.log(token)
    if(!token) {
      return res.status(401).send('token tidak berlaku')
    }try{
      JWT.verify(token, process.env.KEYS, (err, decode) => {
       if(err){
         return res.status(401).send(err.name)
           }else{
             next()
        }
      })
    } catch (error) {
      return res.status(401).send('koneksi hilang'+ token)
    }
  },
  validLogin: (reqData, pass) => {
    if (pass.length != 0) {
      const reqPass = reqData.password
      const sqlPass = pass[0].password
      if (bcrypt.compareSync(reqPass, sqlPass)) {
        const pload = {
          password: reqPass,
          uuid: uuid()
        }
        const load = uuid
        const token = JWT.sign({ load}, process.env.KEYS)
        return (token)
      } else {
        return 'Wrong Username'
      }
    } else {
      return 'Wrong Password'
    }
  }
}
