-- Write your Schema Here -- 
DROP DATABASE IF EXISTS order_db;
CREATE DATABASE order_db;

USE order_db;

CREATE TABLE customers (
  id INT NOT NULL, 
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY(id)
);

CREATE TABLE customer_order (
  id INT,
  customer_id INT,
  order_details TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
  --using id to link customers & customer_order--
);