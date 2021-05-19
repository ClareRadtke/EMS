const mysql = require("mysql");
const inquirer = require("inquirer");
const { responses } = require("./inquirerPrompts");
const { Employee, Role, Department } = require("./classes");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "t25R9pf7Q486sA3S8bj2HDCtTYYjbbxQ",
  database: "employees_db",
});

const addEmployeeData = () => {
  console.log("Adding new employee data ....");
  const query = connection.query(
    `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (${firstName}, ${lastName}, ${roleId}, ${managerId})`
  );
};

const addRoleData = () => {
  console.log("Adding new role data ....");
  const query = connection.query(
    `INSERT INTO role (title, salary, department_id) VALUES (${roleTitle}, ${salary}, ${deptId})`
  );
};

const addDeptData = () => {
  console.log("Adding new department data ....");
  const query = connection.query(
    `INSERT INTO department (name) VALUES (${deptName}) `
  );
};
console.log(responses);
// connection.connect((err) => {
//   if (err) throw err;
//   console.log("connected");
//   // connection.end();
// });
