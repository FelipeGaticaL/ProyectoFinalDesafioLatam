
/* <===== Creación tabla eeff_datos=====> */

CREATE TABLE plan_cuentas(
id SERIAL PRIMARY KEY,
Trimestre INT DEFAULT NULL,
Rut INT DEFAULT NULL,
Razon_Social VARCHAR(300) DEFAULT NULL,
Dato VARCHAR(2) DEFAULT NULL,
UM VARCHAR(6) DEFAULT NULL,
plan_de_cuentas VARCHAR(400) DEFAULT NULL,
Monto numeric DEFAULT NULL,
Taxonomia VARCHAR(20) DEFAULT NULL,
Tipo_de_Informe VARCHAR(20) DEFAULT NULL

FOREIGN KEY (plan_de_cuentas) REFERENCES cuentas(cuenta)
)
