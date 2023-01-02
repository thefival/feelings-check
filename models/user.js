const db = require('../util/database')

exports.getAll = (req, res) => {
   return db.execute('SELECT * FROM user')
   //want to call proc
}