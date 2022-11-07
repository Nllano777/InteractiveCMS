const inquirer = require('inquirer');
const mysql = require('mysql2');
const { async } = require('rxjs');
require("dotenv").config();
const clc = require('cli-color');
const figlet = require("figlet");
const PORT = process.env.PORT || 3001;
// ============================================================================
const connection = mysql.createConnection(
    {
        // MySQL  Below our username, and password are being linked to DOTENV package.
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log("Connected to the Ford_db database.")
);
connection.connect(err => {
    if (err) throw err;
    console.log('connection established!' + "🚀");
    await = startCMS();
});

// ==========================================================================================================
// ==========================================================================================================
figlet("Ford Motor Company", (err, data) => {
    if (err) throw err;
    console.log(data);
})
// ============================================================================
// ============================================================================
console.log(clc.bgBlueBright.whiteBright.bold("This is a Functional command-line application that allows users to Add departments, roles and employees, you can also View departments, roles, employees.To continue please follow the steps below:"));
// ============================================================================
startCMS = async () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'ListOfChoicesArr',
            message: "Select an Option from the list Below",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Display Total of Salaries",
                "Add a department",
                "Add an employee",
                "Exit"],
        },]).then((SelectedOptionIsEqualTo) => {
            switch (SelectedOptionIsEqualTo.ListOfChoicesArr) {
                case "View all departments":
                    await = viewAllDepartmets();
                    break;

                case "View all roles":
                    await = viewAllRoles();
                    break;

                case "View all employees":
                    await = viewAllEmployees();
                    break;

                case "Display Total of Salaries":
                    await = viewSalaryTotal();
                    break;

                case "Add an employee":
                    await = addEmployee();
                    break;

                case "Add a department":
                    await = CreateDepartment();
                    break;

                case "Exit":
                    await = connection.end();
                    break;
            }
        });
};
// Async Function to view All Departments
viewAllDepartmets = async () => {
    connection.query("SELECT * FROM department", (err, data) => {
        try {
            console.log("Displaying all departments:");
            console.table(data);

        } catch (error) {
            if (err)
                throw err;
        }

    });
};
// Async Function to view All Roles
viewAllRoles = async () => {
    connection.query("SELECT * FROM role", (err, data) => {
        try {
            console.log("Displaying all roles:");
            console.table(data);

        } catch (error) {
            if (err)
                throw error;
        };

    });
};
// Working on it.... :(
viewSalaryTotal = async () => {
    connection.query("SELECT * FROM role, salaries", (err, salaries) => {
        try {
            console.log("Displaying all Combined Salaries:");
            console.log(salaries);
        } catch (error) {
            if (err)
                throw error;
        };

    });
};
// Async Function to View All Employees
viewAllEmployees = async () => {
    connection.query("SELECT * FROM employee", (err, data) => {
        try {
            console.log("Displaying all employees:");
            console.table(data);
        } catch (error) {
            if (err)
                throw error;
        }

    });
};
// Async Function to Add a Single Employee
addEmployee = async () => {
    const sql = "SELECT * FROM employee, role";
    connection.query(sql, (err, results) => {
        if (err) throw err;

        inquirer.prompt([
            {
                type: 'confirm',
                name: 'boolean',
                message: 'Would you like to add a new Employee?',
                default: 'false'
            },
            {
                name: "firstName",
                type: "input",
                message: "What is the first name?",
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please enter the first name.");
                    }
                }
            },
            {
                name: "lastName",
                type: "input",
                message: "What is the last name?",
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please enter the last name.");
                    }
                }
            },
            {
                name: "role",
                type: "rawlist",
                choices: () => {

                    // Empty Array of Choices
                    let choiceArray = [];

                    //  create for loop

                    for (let i = 0; i < results.length; i++) {
                        choiceArray.push(results[i].title);
                    }

                    //Remove any Duplicates There may be
                    let cleanChoiceArray = [...new Set(choiceArray)];
                    return cleanChoiceArray;
                },
                message: "What is the role?"
            }
        ]).then(answer => {
            let selectedRole;

            for (let i = 0; i < results.length; i++) {
                if (results[i].title === answer.role) {
                    selectedRole = results[i];
                }
            }

            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: selectedRole.id,
                },
                (err) => {
                    if (err) throw err;
                    console.log(`New employee ${answer.firstName} ${answer.lastName} has been added! as a ${answer.role}`);

                }
            )
        });
    });

};

// Async Function to Add a Department
CreateDepartment = async () => {
    inquirer.prompt([{
        type: 'confirm',
        name: 'boolean',
        message: 'Would you like to create a new department?',
        default: 'false'
    },
    {
        name: "department",
        type: "input",
        message: "What is the new department name?",
        validate: (value) => {
            if (value) {
                return true;
            } else {
                console.log("Please enter department name.");
            }
        }
    },
    ]).then(answer => {
        connection.query(
            "INSERT INTO department SET ?",
            {
                name: answer.department
            },
            (err) => {
                if (err) throw err;
                console.log(`New department ${answer.department} has been added!`);
            }
        );
    });
};

