const conn = require('../config/db')

module.exports = {

  getRegister: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM register', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  addRegister: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO register SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteRegister: (registerid) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM register WHERE registerid = ?', registerid, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateRegister: (data, registerid) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE register SET ? WHERE registerid = ?', [data, registerid], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }

}