DROP DATABASE IF EXISTS employee_tracker_db;
CREATE database employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NOT NULL,
  CONSTRAINT fk_role foreign key (role_id) references roles(id),
  manager_id VARCHAR(30) NULL,

  PRIMARY KEY (id)
);

INSERT INTO employees (first_name, last_name, title, department, salary, manager) VALUES ('Michael','Scott','Regional Manager','Management',70000, 'Self');
INSERT INTO employees (first_name, last_name, title, department, salary, manager) VALUES ('Dwight', 'Schrute','RM Assistant','Sales',50000,'Michael Scott');
INSERT INTO employees (first_name, last_name, title, department, salary, manager) VALUES ('Jim', 'Halpert','Salesman','Sales',52000,'Michael Scott');
INSERT INTO employees (first_name, last_name, title, department, salary, manager) VALUES ('Pam', 'Beasley','Secretary','Administration',40750,'Michael Scott');
INSERT INTO employees (first_name, last_name, title, department, salary, manager) VALUES ('Stanley', 'Hudson','Salesman','Sales',60000,'Michael Scott');
INSERT INTO employees (first_name, last_name, title, department, salary, manager) VALUES ('Phyllis', 'Lapin','Saleswoman','Sales',50000,'Michael Scott');

Select * from employees;

create table department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  
  PRIMARY KEY (id)
);

INSERT INTO department (name) VALUES ('Management');
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Administration');

Select * From department;

create table roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  CONSTRAINT fk_department foreign key (department_id) references department(id),

  PRIMARY KEY (id)
);

INSERT INTO roles (title, salary) VALUES ('Regional Manager',70000);
INSERT INTO roles (first_name, last_name, title, department, salary, manager) VALUES ('RM Assistant','Sales',50000);
INSERT INTO roles (first_name, last_name, title, department, salary, manager) VALUES ('Secretary','Administration',40750);
INSERT INTO roles (first_name, last_name, title, department, salary, manager) VALUES ('Salesman','Sales',60000);

Select * from roles;



