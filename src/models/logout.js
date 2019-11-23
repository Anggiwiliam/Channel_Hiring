const database = require('../config/db')

module.exports = {
    jwtdestroy: (username) => {
        return new Promise((resolve, reject) => {
            database.query('UPDATE register set jwt = NULL WHERE username =?', username, (err, result) => {
                if (err) reject(err)
                resolve(result)
            })
        })
    }
}