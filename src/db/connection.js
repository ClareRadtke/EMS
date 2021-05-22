const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "t25R9pf7Q486sA3S8bj2HDCtTYYjbbxQ",
  database: "employees_db",
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
