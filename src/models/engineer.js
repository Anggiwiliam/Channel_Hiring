const conn = require('../config/db')

module.exports = {

  getEngineer: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM engineer', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getbyskillEngineer: (skill) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM engineer WHERE skill LIKE ? ',
      ['%'+skill+'%'] , (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  searchEngineer: (name,skill,sortParams,sortChoose,limit,offset) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM engineer WHERE name LIKE '%${name}%' 
      OR skill LIKE '%${skill}%' ORDER BY ${sortParams} ${sortChoose} LIMIT ${limit} OFFSET ${offset}`,(err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  // sortEngineer: (name,skill,du) => {
  //   return new Promise((resolve, reject) => {
  //     conn.query(`SELECT * FROM engineer WHERE name LIKE '%${name}%' 
  //     OR skill LIKE '%${skill}%' OR du LIKE '%${du}%'  order by name DESC`,(err, result) => {
  //       if (!err) {
  //         resolve(result)
  //       } else {
  //         reject(new Error(err))
  //       }
  //     })
  //   })
  // },
  // pageEngineer: (limit,offset) => {
  //   return new Promise((resolve, reject) => {
  //     conn.query(`SELECT * FROM engineer LIMIT ${limit} OFFSET ${offset}`,(err, result) => {
  //       if (!err) {
  //         resolve(result)
  //       } else {
  //         reject(new Error(err))
  //       }
  //     })
  //   })
  // },

  addEngineer: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO engineer SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteEngineer: (engineerid) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM engineer WHERE engineerid = ?', engineerid, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateEngineer: (data, engineerid) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE engineer SET ? WHERE engineerid = ?', [data, engineerid], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }

}