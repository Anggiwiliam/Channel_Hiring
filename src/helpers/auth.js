require('dotenv/config')
const uuid = require('uuid/v4')
const bcrypt = require('bcryptjs')

const JWT = require('jsonwebtoken')
const loginModel = require('../models/register')

module.exports = {
  
  tokenVerify: async (req, res, next) => {
    const token = req.headers.authorization
    if(!token) {
      return res.status(200).send('silahkan login')
    }try{
      console.log('masuk try')
      const decode = await JWT.decode(token, { complete: true})
      const username = decode.payload.usr
      const tokenDb = await loginModel.getJwtDB(username)
      const tokenCheck = tokenDb[0].jwt

       if(tokenCheck == token){
         JWT.verify(token, process.env.KEYS, (err, decode) => {
           if (tokenCheck == !token) {
            return res.status(401).send('token tidak berlaku')
           } else {
             next()
           }
         })
         
           }else{
            return res.status(401).send('Silahkan Login')
            
        }
      
    } catch (error) {
      
    }
  },
  validLogin: (reqData, pass) => {
    if (pass != undefined) {
      const reqPass = reqData.password
      const sqlPass = pass[0].password
      const dbjwt = pass[0].JWT
      const username = reqData.username

       if(!dbjwt){
        if (bcrypt.compareSync(reqPass, sqlPass)) {
          const pload = {
            usr: reqData.username,
            uuid: uuid()
          }
          const token = JWT.sign(pload, process.env.KEYS,{expiresIn: '24h'})
          loginModel.patchJwtById(token, username)
          return token
        }
      } else {
        return dbjwt
      }
    } else {
      return 'Wrong Password'
    }
  }
}
