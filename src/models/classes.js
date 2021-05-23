class Employee {
  constructor(firstName, lastName, roleId, managerId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.roleId = roleId;
    this.managerId = managerId;
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getRoleId() {
    return this.roleId;
  }
  getManagerId() {
    return this.managerId;
  }
}

class Role {
  constructor(roleTitle, salary, deptId) {
    this.roleTitle = roleTitle;
    this.salary = salary;
    this.deptId = deptId;
  }
  getRoleTitle() {
    return this.roleTitle;
  }
  getSalary() {
    return this.salary;
  }
  getDeptId() {
    return this.deptId;
  }
}

class Department {
  constructor(deptName) {
    this.deptName = deptName;
  }
  getDeptName() {
    return this.deptName;
  }
}

module.exports = { Employee, Role, Department };
