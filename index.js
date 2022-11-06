
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
console.log("This is a Functional command-line application that allows users to Add departments, roles and employees, you can also View departments, roles, employees.To continue please follow the steps below:")

const PORT = process.env.PORT || 3001;

const connection = mysql.createConnection(
    {
        host: 'localhost',
        PORT: 3001,
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: 'my$QLpassword',
        database: 'Ford_db'
    },
    console.log("Connected to the Ford_db database.")
);
connection.connect(err => {
    if (err) throw err;
    console.log('connection established!' + "🚀");
    await = startCMS();
});

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
                    await = viewDepts();
                    break;

                case "View all roles":
                    await = viewRoles();
                    break;

                case "View all employees":
                    await = viewEes();
                    break;

                case "Add a department":
                    await = addDept();
                    break;

                case "Add a role":
                    await = addRole();
                    break;

                case "Add an employee":
                    await = addEe();
                    break;

                case "Update employee role":
                    await = update();
                    break;

                case "Exit":
                    await = connection.end();
                    break;
            }
        });
};

// whenDone = () => {
//     await = startCMS();
// }
// whenDone()