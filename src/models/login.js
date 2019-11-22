const conn  = require('../config/db')

module.exports = {
    getLogin: (username) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT password FROM register where username = ?', username, (err, result) => {
                if(err) reject(new Error(err))
                resolve(result)
            })
        })
    }
}