//config mysql
var mysql = require('mysql')

var connection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'users'
});


module.exports = connection