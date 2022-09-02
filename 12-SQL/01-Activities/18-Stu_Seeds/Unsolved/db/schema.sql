DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE products(
  id INT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

--该ALTER TABLE语句用于添加、删除或修改现有表中的列。--
ALTER TABLE products;
ADD sale VARCHAR(255);