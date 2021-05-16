# Employee Management System

A CLI interface to manage employee details using node, inquirer, and MySQL.  
Get your employee information under control using this [Employee Management System]().

![Video walkthrough of how to use Notizen](./assets/images/walkthough.gif)


## User Story
As a business owner  
I want to be able to view and manage the departments, roles, and employees in my company  
So that I can organize and plan my business  

## Requirements:
- [ ] A database schema containing 3 tables:
  - [ ] department:
    - [ ] id - INT PRIMARY KEY
    - [ ] name - VARCHAR(30) to hold department name
  - [ ] role:
    - [ ] id - INT PRIMARY KEY
    - [ ] title -  VARCHAR(30) to hold role title
    - [ ] salary -  DECIMAL to hold role salary
    - [ ] department_id -  INT to hold reference to department role belongs to
  - [ ] employee:
    - [ ] id - INT PRIMARY KEY
    - [ ] first_name - VARCHAR(30) to hold employee first name
    - [ ] last_name - VARCHAR(30) to hold employee last name
    - [ ] role_id - INT to hold reference to role employee has
    - [ ] manager_id - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
- [ ] A command-line application that at a minimum allows the user to:
  - [ ] Add departments, roles, employees
  - [ ] View departments, roles, employees
  - [ ] Update employee roles

Bonus:
- [ ] Update employee managers
- [ ] View employees by manager
- [ ] Delete departments, roles, and employees
- [ ] View the total utilized budget of a department -- ie the combined salaries of all employees in that department


