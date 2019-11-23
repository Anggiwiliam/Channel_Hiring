const logoutModel = require('../models/logout')
const JWT = require('jsonwebtoken')

module.exports = {
    jwtdestroy: async (req, res) => {
        try {
            const jwtHeader = req.headers.token
            const registerid = JWT.decode(jwtHeader, { complete: true})
            .payload.usr
            const result = await logoutModel.jwtdestroy(registerid)
            console.log(result)
            res.status(200).json({
                status: 200,
                result: result 
            })
        } catch (err) {
            console.log(err)
        }
    }
}