const conn = require('../config/db')

module.exports = {

    getCompany: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM company', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    addCompany: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO company SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    deleteCompany: (companyid) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM company WHERE companyid = ?', companyid, (err, result) => {
                if (!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    updateCompany: (data, companyid) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE company SET ? WHERE companyid = ?', [data, companyid], (err, result) => {
              if (!err) {
                  resolve(result)
              }  else {
                  reject(new Error(err))
              }
            })
        })
    }
}