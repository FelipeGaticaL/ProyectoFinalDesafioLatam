/* <===== Creación tabla plan_de_cuentas=====> */

CREATE TABLE cuentas (
 	num_id INT PRIMARY KEY,
	id_cuenta VARCHAR(8) DEFAULT NULL,
	cuenta VARCHAR (500) DEFAULT NULL,
	tipo_informe VARCHAR (20) DEFAULT NULL,
	nombre_informe VARCHAR (55) DEFAULT NULL,
	estatus_cuenta VARCHAR (3) DEFAULT NULL	
);

