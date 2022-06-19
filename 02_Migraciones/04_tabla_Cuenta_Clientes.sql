/* <===== Creación tabla Cuenta_Cliente=====> */

CREATE TABLE Cuenta_Cliente(
id_Serial_cliente SERIAL DEFAULT NULL,
Nombre VARCHAR(300) DEFAULT NULL,
Mail VARCHAR(300) DEFAULT NULL,
contraseña VARCHAR(300) DEFAULT NULL,
Estado BOOLEAN DEFAULT NULL

PRIMARY KEY (id_Serial_cliente)
)