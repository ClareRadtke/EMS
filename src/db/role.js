const { connection } = require("./connection");

function getRoles() {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT role.id, role.title, role.salary, department.name as department_name 
      FROM role LEFT JOIN department ON role.department_id = department.id`,
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
}

function addRoleData(role) {
  console.log("Adding new role data ....");
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO role (title, salary, department_id)
      VALUES (?, ?, ?)`, [role.roleTitle, role.salary, role.deptId],
      (err) => {
        if (err) reject(err);
        resolve();
      }
    );
  });
}

module.exports = { getRoles, addRoleData };
