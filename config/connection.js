var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.connection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  })
}

module.exports = connection;
