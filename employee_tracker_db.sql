DROP DATABASE IF EXISTS employee_tracker_db;
CREATE database employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  title VARCHAR(50) NULL,
  department VARCHAR(30) NULL,
  salary INT NOT NULL,
  manager VARCHAR(30) NULL,

  PRIMARY KEY (id)
);

INSERT INTO employees (first_name, last_name, title, department, salary, manager) VALUES ('Michael','Scott','Regional Manager','Management',70000, 'Self');
INSERT INTO employees (first_name, last_name, title, department, salary, manager) VALUES ('Dwight Schrute','RM Assistant','Sales',50000,'Michael Scott');
INSERT INTO employees (first_name, last_name, title, department, salary, manager) VALUES ('Jim Halpert','Salesman','Sales','52,000','Michael Scott');
INSERT INTO employees (first_name, last_name, title, department, salary, manager) VALUES ('Pam Beasley','Secretary','Administration','40,750','Michael Scott');
INSERT INTO employees (first_name, last_name, title, department, salary, manager) VALUES ('Stanley Hudson','Salesman','Sales','60,000','Michael Scott');
INSERT INTO employees (first_name, last_name, title, department, salary, manager) VALUES ('Phyllis Lapin','Saleswoman','Sales','50,000','Michael Scott');

SELECT * FROM employees;

