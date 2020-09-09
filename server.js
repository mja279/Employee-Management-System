const mysql = require("mysql2");
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
        type: "list",
        message: "What would you like to do?",
        choices: [
          {
            name: "View All Employees",
            value: "viewEmployees"
          },
          "View All Employees by Department",
          "View All Employees by Manager",
          "Add Employee",
          "Remove Employee",
          
          {
            name: "Update Employee Role",
            value: "updateEmployee"
          },
          "Update Employee Manager",
          "Exit"
        ]
      },
      console.log("Move up and down to reveal more choices"))
      .then(function(res) {
        console.log(res)
        switch (res.action) {
        case "viewEmployees":
          employeeSearch();
          break;
  
        case "View all employees by department":
          byDepartmentSearch();
          break;
        case "View all employees by manager":
          byManagerSearch();
          break;
  
        case "Add employee":
          addEmployee();
          break;
  
        case "updateEmployee":
          updateEmployee();
          break;
        
        case "Update employee manager":
          updateManager();
          break;

        case "Remove employee":
          removeEmployee();
          break;
        }
      });
  }

function employeeSearch() {
  const query = "SELECT * FROM employees";
  connection.query(query, function (err, res) {
      if (err) throw err;
      console.log("Viewing all employees:\n");
      console.table(res);

    runEmployeeSearch();
  });
}

function updateEmployee() {
  const query = "SELECT * FROM employees";
  const query2 = "SELECT * FROM roles"
  connection.query(query, function(err, res) {
    if (err) throw err;
    let empArr = [];
    res.map(emp => empArr.push(emp))

    connection.query(query2, function(err2, res2){
      if (err) throw err;
      let roleArr = [];
      for(let i = 0; i < res2.length; i++){
        roleArr.push(res2[i])
      }

      inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "what is the employee name?",
        choices: empArr
        },
        {
        name: "action",
        type: "list",
        message: "what is the role name",
        choices: roleArr
        }).then(result => {
          console.log(result)
        })
      })

      console.log("Viewing all employees:\n");
      console.table(res);

    runEmployeeSearch();
  })
}

// function byDepartmentSearch() {
//   const query = "SELECT * FROM employees GROUP BY department";
//   connection.query(query, function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].department);
//     }
//     runEmployeeSearch();
//   });
// }

// function byManagerSearch() {
//   const query = "SELECT * FROM employees GROUP BY manager";
//   connection.query(query, function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].manager);
//     }
//     runEmployeeSearch();
//   });
// }