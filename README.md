# Employee Management System

A CLI interface to manage employee details using node, inquirer, and MySQL.  
Get your employee information under control using this [Employee Management System]().

![Video walkthrough of how to use Notizen](./assets/images/walkthough.gif)


## User Story
As a business owner  
I want to be able to view and manage the departments, roles, and employees in my company  
So that I can organize and plan my business  

## Requirements:
- [x] A database schema containing 3 tables:
  - [x] department containing id and name columns
  - [x] role containing id, title, salary and department_id columns
  - [x] employee containing id, first_name, last_name, role_id and manager_id

- [x] A command-line application that allows the user to:
  - [x] Add departments, roles, employees
  - [x] View departments, roles, employees
  - [x] Update employee roles

- [x] Use the MySQL NPM package to connect to your MySQL database and perform queries
- [x] Use InquirerJs NPM package to interact with the user via the command-line
- [x] Use console.table to print MySQL rows to the console

Bonus:
- [ ] Update employee managers
- [ ] View employees by manager
- [ ] Delete departments, roles, and employees
- [ ] View the total utilized budget of a department -- ie the combined salaries of all employees in that department


