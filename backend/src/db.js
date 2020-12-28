const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

con.connect(function (err) {
  if (err) throw err;
});

module.exports = con;
