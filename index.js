const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "t25R9pf7Q486sA3S8bj2HDCtTYYjbbxQ",
  database: "employees",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

// Question arrays for Inquirer Prompts
const menuQuestions = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "selection",
    choices: ["Add Employee", "Add Role", "Add Department", "Exit"],
  },
];
// TODO: Role & Dept ID to be auto increment?
const addEmployeeQuestions = [
  { type: "input", message: "First name", name: "firstName" },
  { type: "input", message: "Last name", name: "lastName" },
  { type: "input", message: "Role ID number", name: "roleId" },
  { type: "input", message: "Manager ID number", name: "managerId" },
];
const addRoleQuestions = [
  { type: "input", message: "New role ID", name: "newRoleID" },
  { type: "input", message: "Role title", name: "roleTitle" },
  { type: "input", message: "Department ID number", name: "deptID" },
];
const addDepartmentQuestions = [
  { type: "input", message: "New department ID", name: "newDeptID" },
  { type: "input", message: "Department name", name: "deptName" },
];

// Main menu & navigation prompt
function mainMenuPrompt() {
  inquirer
    .prompt(menuQuestions)
    .then((answer) => {
      if (answer.selection === "Add Employee") addEmployeePrompt();
      if (answer.selection === "Add Role") addRolePrompt();
      if (answer.selection === "Add Department") addDeptPrompt();
      if (answer.selection === "Exit") {
        console.log("Generating", responses);
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error("tty error");
      } else {
        console.error(error);
      }
    });
}
