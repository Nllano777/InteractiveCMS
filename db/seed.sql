
USE Ford_db;

INSERT INTO department(name)
VALUES
    ("Sales"),
    ("HR"),
    ("Service"),
    ("Parts");

INSERT INTO role(title, salary, department_id)
VALUES
    ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 1),
    ("Lead of HR", 150000, 2),
    ("assistant of HR", 120000, 2),
    ("Mechanic", 120000, 3),
    ("Parts Lead", 250000, 4),
    ("Assistant", 190000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ("Nate", "Wesly", 1, NULL),
    ("Rob", "ELm", 2, 1),
    ("Sean", "Keaton", 3, NULL),
    ("Cory", "Hedrick", 4, 3),
    ("Elly", "Sweets", 5, NULL),
    ("Dave", "Thomas", 6, NULL),
    ("Chris", "Mueller", 7, 6);