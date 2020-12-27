DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
burger_name VARCHAR (50),
devoured BOOLEAN
);

INSERT INTO burgers (burger_name, devoured) VALUE("Cheeseburger", true), ("Hamburger", true), ("Black_Bean_Burger", true);

SELECT * FROM burgers;


