const { connection } = require("./connection");

function getEmployees() {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT 
      employee.id, employee.first_name, employee.last_name, employee.manager_id,
      role.title as role_title, role.salary, department.name as department_name
      FROM employee 
      LEFT JOIN role
      ON employee.role_id = role.id
      LEFT JOIN department
      ON role.department_id = department.id
      `,
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
}

function addEmployeeData(employee) {
  console.log("Adding new employee data ....");
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
      ("${employee.firstName}", "${employee.lastName}", ${employee.roleId}, ${employee.managerId})`,
      (err) => {
        if (err) reject(err);
        resolve();
      }
    );
  });
}

function updateEmployeeRole(newData) {
  console.log("updating employee information...");
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE employee SET role_id = ${newData.updatedRoleId} WHERE id = ${newData.employeeId}`,
      (err) => {
        if (err) reject(err);
        resolve();
      }
    );
  });
}

module.exports = {
  getEmployees,
  addEmployeeData,
  updateEmployeeRole,
};
