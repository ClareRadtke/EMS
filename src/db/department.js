const { connection } = require("./connection");

function getDepartments() {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM department", (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

function addDeptData(dept) {
  console.log("Adding new department data ....");
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO department (name) VALUES (?) `, [dept.deptName],
      (err) => {
        if (err) reject(err);
        resolve();
      }
    );
  });
}

module.exports = { getDepartments, addDeptData };
