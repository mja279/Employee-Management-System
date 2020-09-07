DROP DATABASE IF EXISTS employee_tracker_db;
CREATE database employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(15) NULL,
  last_name VARCHAR(15) NULL,
  title VARCHAR(15) NULL,
  department VARCHAR(15) NULL,
  salary INT NOT NULL,
  manager VARCHAR(30) NULL,

  PRIMARY KEY (id)
);

SELECT * FROM employees;


