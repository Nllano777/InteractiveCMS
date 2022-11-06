DROP DATABASE IF EXISTS Ford_db;
CREATE DATABASE Ford_db;

USE Ford_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (department_name)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY Key (id),
    FOREIGN KEY(department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT REFERENCES employee(id),
    PRIMARY Key (id),
    FOREIGN KEY (role_id) 
    REFERENCES role(id)
);

-- SELECT name 
-- FROM department 
-- LEFT JOIN role 
-- ON department.id = role.department_id;

-- SELECT title, salary, department_id 
-- FROM role 
-- LEFT JOIN department 
-- ON role.department_id = department.id;

-- SELECT first_name, last_name, role_id, manager_id 
-- FROM employee 
-- JOIN role 
-- ON employee.role_id = role.department_id;