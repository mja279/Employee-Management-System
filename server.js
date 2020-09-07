const mysql = require("mysql");
const inquirer = require("inquirer");


const connection = mysql.createConnection({
    host: "localhost",
      port: 3306,
      user: "root",
      password: "Jimejime13!",
      database: "employee_tracker_db"
  });

connection.connect(function(err) {
if (err) throw err;
runEmployeeSearch();
});

function runEmployeeSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees by Department",
          "View All Employees by Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager"
        ]
      },
      console.log("Move up and down to reveal more choices"))
      .then(function(answer) {
        switch (answer.action) {
        case "View All Employees":
          employeeSearch();
          break;
  
        case "View All Employees by Department":
          byDepartmentSearch();
          break;
  
        case "View All Employees by Manager":
          byManagerSearch();
          break;
  
        case "Add Employee":
          addEmployee();
          break;
  
        case "Update Employee Role":
          updateEmployee();
          break;
        
        case "Update Employee Manager":
          updateManager();
          break;
        }
      });
  }

function employeeSearch() {
  var query = "SELECT * FROM employees";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].first_name);
    }
    runEmployeeSearch();
  });
}

function byDepartmentSearch() {
  var query = "SELECT * FROM employees GROUP BY department";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].department);
    }
    runEmployeeSearch();
  });
}

function byManagerSearch() {
  var query = "SELECT * FROM employees GROUP BY manager";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].manager);
    }
    runEmployeeSearch();
  });
}