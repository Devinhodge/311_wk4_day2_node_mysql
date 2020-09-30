const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '35.193.172.30',
        user: 'root',
        password: 'Bamkitty3',
        database: 'admin'
      })
      return this.pool
    }
    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;