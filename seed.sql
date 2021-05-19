-- Creates new rows containing data in all named columns --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rob", "Evans", 5, 9);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mica", "Stone", 6, 9);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Geraldine", "Fleming", 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Developer", 90000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Administrator", 40000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Administrator", 40000.00, 2);

INSERT INTO department (name)
VALUES ("HR");

INSERT INTO department (name)
VALUES ("IT");
