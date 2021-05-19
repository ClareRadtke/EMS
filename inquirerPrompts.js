const inquirer = require("inquirer");
const { Employee, Role, Department } = require("./classes");

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
  { type: "input", message: "Role title", name: "roleTitle" },
  { type: "input", message: "Salary", name: "salary" },
  { type: "input", message: "Department ID number", name: "deptId" },
];
const addDeptQuestions = [
  { type: "input", message: "Department name", name: "deptName" },
];

const responses = [];

mainMenuPrompt();

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

// Action Prompts

function addEmployeePrompt() {
  inquirer.prompt(addEmployeeQuestions).then((answers) => {
    const newEmployee = answers;
    responses.push(newEmployee);
    mainMenuPrompt();
  });
}

function addRolePrompt() {
  inquirer.prompt(addRoleQuestions).then((answers) => {
    const newRole = answers;
    responses.push(newRole);
    mainMenuPrompt();
  });
}

function addDeptPrompt() {
  inquirer.prompt(addDeptQuestions).then((answer) => {
    const newDepartment = answer;
    responses.push(newDepartment);
    mainMenuPrompt();
  });
}

module.exports = {
  mainMenuPrompt,
  responses,
};
