CREATE DATABASE proyecto

CREATE TABLE roles(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

INSERT INTO
    roles(id, name)
VALUES
    (1, 'user'),
    (2, 'admin');

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    role_id INTEGER DEFAULT 1,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE cuentas (
 	num_id INT,
	id_cuenta VARCHAR(8) DEFAULT NULL,
	cuenta VARCHAR (500) DEFAULT NULL,
	tipo_informe VARCHAR (20) DEFAULT NULL,
	nombre_informe VARCHAR (55) DEFAULT NULL,
	estatus_cuenta VARCHAR (3) DEFAULT NULL	
);

CREATE TABLE ratios (
	id_ratio INT,
	nombre_ratio VARCHAR (400)
)


CREATE TABLE plan_cuentas(
id SERIAL,
Trimestre INT DEFAULT NULL,
Rut INT DEFAULT NULL,
Razon_Social VARCHAR(300) DEFAULT NULL,
Dato VARCHAR(2) DEFAULT NULL,
UM VARCHAR(6) DEFAULT NULL,
plan_de_cuentas VARCHAR(400) DEFAULT NULL,
Monto numeric DEFAULT NULL,
Taxonomia VARCHAR(20) DEFAULT NULL,
Tipo_de_Informe VARCHAR(20) DEFAULT NULL)
