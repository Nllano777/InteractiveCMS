
//requirements
// Build a command-line application that at a minimum allows the user to:
// Add departments, roles, employees
// View departments, roles, employees
// Update employee roles
// ============================================================================
// ============================================================================
// Bonus points if you're able to:
// Update employee managers
// View employees by manager
// Delete departments, roles, and employees
// View the total utilized budget of a department -- ie the combined salaries of all employees in that department
// ============================================================================
// ============================================================================

const inquirer = require('inquirer');
const mysql = require('mysql2');
const { async } = require('rxjs');
require("dotenv").config();
const PORT = process.env.PORT || 3001;
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
console.log("This is a Functional command-line application that allows users to Add departments, roles and employees, you can also View departments, roles, employees.To continue please follow the steps below:")


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
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update employee role",
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

                case "Add a department":
                    await = CreateDepartment();
                    break;

                case "Add a role":
                    await = CreateRole();
                    break;

                case "Add an employee":
                    await = addEmployee();
                    break;

                case "Update employee role":
                    await = updateEmpRole();
                    break;

                case "Exit":
                    await = connection.end();
                    break;
            }
        });
};

viewAllDepartmets = async () => {
    connection.query("SELECT * FROM department", (err, data) => {
        try {
            console.log("Displaying all departments:");
            console.table(data);
            // start();
        } catch (error) {
            if (err)
                throw err;
        }

    });
};

// whenDone = () => {
//     await = startCMS();
// }
// whenDone()