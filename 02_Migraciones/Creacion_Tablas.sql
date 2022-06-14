/* <===== Creación tabla eeff_datos=====> */

CREATE TABLE eeff_datos(
id SERIAL,
Trimestre INT DEFAULT NULL,
Rut INT DEFAULT NULL,
Razon_Social VARCHAR(300) DEFAULT NULL,
Dato VARCHAR(2) DEFAULT NULL,
UM VARCHAR(6) DEFAULT NULL,
Cuentas_IFRS VARCHAR(400) DEFAULT NULL,
Monto numeric DEFAULT NULL,
Taxonomia VARCHAR(20) DEFAULT NULL,
Tipo_de_Informe VARCHAR(20) DEFAULT NULL

PRIMARY KEY (id)

)

/* <===== Creación tabla plan_de_cuentas=====> */

CREATE TABLE plan_de_cuentas(
Plan_Cuentas_IFRS VARCHAR(255) DEFAULT NULL,
TIPO VARCHAR(30) DEFAULT NULL

PRIMARY KEY (Plan_Cuentas_IFRS)


)

/* <===== Creación tabla Empresas_SA=====> */

CREATE TABLE Empresas_SA(
Rut_SA INT DEFAULT NULL,
Razon_Social_SA VARCHAR(300) DEFAULT NULL,
Rubro VARCHAR(30) DEFAULT NULL

PRIMARY KEY (Rut_SA)

)

/* <===== Creación tabla Cuenta_Cliente=====> */

CREATE TABLE Cuenta_Cliente(
id_Serial_cliente SERIAL DEFAULT NULL,
Nombre VARCHAR(300) DEFAULT NULL,
Mail VARCHAR(300) DEFAULT NULL,
contraseña VARCHAR(300) DEFAULT NULL,
Estado BOOLEAN DEFAULT NULL

PRIMARY KEY (Mail)
)


