
USE Ford_db;

INSERT INTO department(department_name)
VALUES
    ("Sales"),
    ("HR"),
    ("Service"),
    ("Parts");

INSERT INTO role(title, salary, department_id)
VALUES
    ("General Manager", 270000, 1),
    ("Sales Manager", 150000, 1),
    ("Sales Rep", 80000, 1),
    ("Head of HR", 150000, 2),
    ("assistant of HR", 50000, 2),
    ("assistant of HR", 50000, 2),
    ("Diesel Tech", 125000, 3),
    ("Lead Tech", 100000, 3),
    ("Used car Tech", 50000, 3),
    ("Parts Manager", 70000, 4),
    ("Parts Rep", 45000, 4),
    ("Parts Rep", 45000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Dave", "Hosley", 1, NULL),
       ("Samantha", "Wes", 2, 1),
       ("Kyle", "Davis", 3, 1),
       ("Aston", "Kuthcer", 4, NULL),
       ("Erick", "Jones", 5, 4),
       ("Thomas", "Hosley", 6, 4),
       ("Bill", "Clinton", 7, NULL),
       ("Patrick", "Bateman", 8, 7),
       ("Austin", "Smith", 9, 7),
       ("Camila", "Ela", 10, NULL),
       ("Larson", "Ler", 11, 10),
       ("Wallace", "Berchman", 12, 10);
    