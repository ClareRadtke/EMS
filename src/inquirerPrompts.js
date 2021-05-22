const inquirer = require("inquirer");
const cTable = require("console.table");
const { Employee, Role, Department } = require("./models/classes");
const {
  getEmployees,
  addEmployeeData,
  updateEmployeeData,
} = require("./db/employee");
const { getRoles, addRoleData } = require("./db/role");
const { getDepartments, addDeptData } = require("./db/department");

// Question arrays for Inquirer Prompts
const menuQuestions = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "selection",
    choices: [
      "Add Employee",
      "Add Role",
      "Add Department",
      "Update an Employee's role",
      "View all Employees",
      "View all Roles",
      "View all Departments",
      "Exit",
    ],
  },
];

const addEmployeeQuestions = [
  { type: "input", message: "First name", name: "firstName" },
  { type: "input", message: "Last name", name: "lastName" },
  { type: "input", message: "Role ID number", name: "roleId" },
  { type: "input", message: "Manager ID number", name: "managerId" },
];
const addRoleQuestions = [
  { type: "input", message: "Role title", name: "roleTitle" },
  { type: "input", message: "Salary", name: "salary" },
  { type: "input", message: "Department ID number", name: "deptId" },
];
const addDeptQuestions = [
  { type: "input", message: "Department name", name: "deptName" },
];
const updateEmployeeQuestions = [
  { type: "input", message: "Employee ID number", name: "employeeId" },
  { type: "input", message: "New role ID number", name: "roleId" },
];

// Main menu & navigation prompt
function mainMenuPrompt() {
  inquirer
    .prompt(menuQuestions)
    .then((answer) => {
      if (answer.selection === "Add Employee") addEmployeePrompt();
      if (answer.selection === "Add Role") addRolePrompt();
      if (answer.selection === "Add Department") addDeptPrompt();
      if (answer.selection === "Update an Employee's role") {
        updateEmployeePrompt();
      }
      if (answer.selection === "View all Employees") viewEmployees();
      if (answer.selection === "View all Roles") viewRoles();
      if (answer.selection === "View all Departments") viewDepts();
      if (answer.selection === "Exit") {
        console.log("Have a good day!");
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

// Action Prompts
function addEmployeePrompt() {
  inquirer.prompt(addEmployeeQuestions).then((answers) => {
    const manager = answers.managerId != "" ? answers.managerId : "NULL";
    const newEmployee = new Employee(
      answers.firstName,
      answers.lastName,
      answers.roleId,
      manager
    );
    addEmployeeData(newEmployee).then(() => mainMenuPrompt());
  });
}

function addRolePrompt() {
  inquirer.prompt(addRoleQuestions).then((answers) => {
    const newRole = new Role(answers.roleTitle, answers.salary, answers.deptId);
    addRoleData(newRole).then(() => mainMenuPrompt());
  });
}

function addDeptPrompt() {
  inquirer.prompt(addDeptQuestions).then((answer) => {
    const newDepartment = new Department(answer.deptName);
    addDeptData(newDepartment).then(() => mainMenuPrompt());
  });
}

function updateEmployeePrompt() {
  inquirer.prompt(updateEmployeeQuestions).then((answers) => {
    const updatedEmployeeRole = {
      employeeId: answers.employeeId,
      updatedRoleId: answers.roleId,
    };
    updateEmployeeRole(updatedEmployeeRole).then(() => mainMenuPrompt());
  });
}

// View database tables
function viewEmployees() {
  getEmployees().then((employees) => {
    console.table(employees);
    mainMenuPrompt();
  });
}

function viewRoles() {
  getRoles().then((roles) => {
    console.table(roles);
    mainMenuPrompt();
  });
}

function viewDepts() {
  getDepartments().then((departments) => {
    console.table(departments);
    mainMenuPrompt();
  });
}

module.exports = {
  mainMenuPrompt,
  responses,
};
