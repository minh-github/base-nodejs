var mysql = require('mysql');

var mysqlConnector = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "gearos"
});

mysqlConnector.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!!!")
});

module.exports = mysqlConnector;