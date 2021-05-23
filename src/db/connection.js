const mysql = require("mysql");
require('dotenv').config();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
});

function ready() {
  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) reject(err);
      resolve();
    });
  });
}

module.exports = {
  ready,
  connection,
};
