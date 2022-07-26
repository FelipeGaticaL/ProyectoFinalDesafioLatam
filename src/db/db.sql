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
 	num_id INT PRIMARY KEY,
	id_cuenta VARCHAR(8) DEFAULT NULL,
	cuenta VARCHAR (500) DEFAULT NULL,
	tipo_informe VARCHAR (20) DEFAULT NULL,
	nombre_informe VARCHAR (55) DEFAULT NULL,
	estatus_cuenta VARCHAR (3) DEFAULT NULL	
);

CREATE TABLE ratios (
	id_ratio INT PRIMARY KEY,
	nombre_ratio VARCHAR (400)
)


CREATE TABLE plan_cuentas(
id SERIAL INT PRIMARY KEY,
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

CREATE EXTENSION IF NOT EXISTS tablefunc;


INSERT INTO cuentas VALUES
('1','11.10.10','Efectivo y equivalentes al efectivo','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('2','11.10.20','Otros activos financieros corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('3','11.10.30','Otros activos no financieros corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('4','11.10.40','Deudores comerciales y otras cuentas por cobrar corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('5','11.10.50','Cuentas por cobrar a entidades relacionadas, corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('6','11.10.60','Inventarios corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('7','11.10.70','Activos biológicos corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('8','11.10.80','Activos por impuestos corrientes, corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('9','11.10.00','Total de activos corrientes distintos de los activo o grupos de activos para su disposición clasificados como mantenidos para la venta o como mantenidos para distribuir a los propietarios','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('10','11.11.10','Activos no corrientes o grupos de activos para su disposición clasificados como mantenidos para la venta o como mantenidos para distribuir a los propietarios','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('11','11.00.00','Activos corrientes totales','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('12','12.10.10','Otros activos financieros no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('13','12.10.20','Otros activos no financieros no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('14','12.10.30','Cuentas por cobrar no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('15','12.10.40','Cuentas por cobrar a entidades relacionadas, no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('16','12.10.50','Inventarios, no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('17','12.10.60','Inversiones contabilizadas utilizando el método de la participación','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('18','12.10.70','Activos intangibles distintos de la plusvalía','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('19','12.10.80','Plusvalía','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('20','12.10.90','Propiedades, planta y equipo','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('21','12.11.10','Activos biológicos no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('22','12.11.20','Propiedad de inversión','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('23','12.11.30','Activos por derecho de uso','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('24','12.11.40','Activos por impuestos corrientes, no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('25','12.11.50','Activos por impuestos diferidos','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('26','12.00.00','Total de activos no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('27','10.00.00','Total de activos','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('28','21.10.10','Otros pasivos financieros corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('29','21.10.20','Pasivos por arrendamientos corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('30','21.10.30','Cuentas por pagar comerciales y otras cuentas por pagar','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('31','21.10.40','Cuentas por pagar a entidades relacionadas, corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('32','21.10.50','Otras provisiones a corto plazo','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('33','21.10.60','Pasivos por impuestos corrientes, corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('34','21.10.70','Provisiones corrientes por beneficios a los empleados','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('35','21.10.80','Otros pasivos no financieros corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('36','21.10.00','Total de pasivos corrientes distintos de los pasivos incluidos en grupos de activos para su disposición clasificados como mantenidos para la venta','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('37','21.11.10','Pasivos incluidos en grupos de activos para su disposición clasificados como mantenidos para la venta','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('38','21.00.00','Pasivos corrientes totales','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('39','22.10.10','Otros pasivos financieros no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('40','22.10.20','Pasivos por arrendamientos no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('41','22.10.30','Cuentas por pagar no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('42','22.10.40','Cuentas por pagar a entidades relacionadas, no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('43','22.10.50','Otras provisiones a largo plazo','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('44','22.10.60','Pasivo por impuestos diferidos','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('45','22.10.70','Pasivos por impuestos corrientes, no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('46','22.10.80','Provisiones no corrientes por beneficios a los empleados','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('47','22.10.90','Otros pasivos no financieros no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('48','22.10.00','Total de pasivos no corrientes','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('49','22.00.00','Total de pasivos','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('50','31.10.10','Capital emitido y pagado','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('51','31.10.10','Capital emitido','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('52','31.10.20','Ganancias (pérdidas) acumuladas','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('53','31.10.30','Prima de emisión','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('54','31.10.40','Acciones propias en cartera','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('55','31.10.50','Otras participaciones en el patrimonio','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('56','31.10.60','Otras reservas','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('57','31.10.70','Patrimonio atribuible a los propietarios de la controladora','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('58','31.10.80','Participaciones no controladoras','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('59','31.10.00','Patrimonio total','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('60','30.00.00','Total de patrimonio y pasivos','ESF C/NC','Estado de Situación Financiera, Corriente/No Corriente','on'),
('100','41.10.10','Ingresos de actividades ordinarias','ERFG','Estado del Resultado, por Función de Gasto','on'),
('101','41.10.10','Costo de ventas','ERFG','Estado del Resultado, por Función de Gasto','on'),
('102','41.10.10','Ganancia bruta','ERFG','Estado del Resultado, por Función de Gasto','on'),
('103','41.11.10','Otros ingresos','ERFG','Estado del Resultado, por Función de Gasto','on'),
('104','41.11.20','Costos de distribución','ERFG','Estado del Resultado, por Función de Gasto','on'),
('105','41.11.30','Gastos de administración','ERFG','Estado del Resultado, por Función de Gasto','on'),
('106','41.11.40','Otros gastos, por función','ERFG','Estado del Resultado, por Función de Gasto','on'),
('107','41.11.50','Otras ganancias (pérdidas)','ERFG','Estado del Resultado, por Función de Gasto','on'),
('108','41.11.60','Ganancias (pérdidas) de actividades operacionales','ERFG','Estado del Resultado, por Función de Gasto','on'),
('109','41.11.70','Ganancias (pérdidas) que surgen de la baja en cuentas de activos financieros medidos al costo amortizado','ERFG','Estado del Resultado, por Función de Gasto','on'),
('110','41.12.10','Ingresos financieros','ERFG','Estado del Resultado, por Función de Gasto','on'),
('111','41.12.20','Costos financieros','ERFG','Estado del Resultado, por Función de Gasto','on'),
('112','41.12.30','Diferencias de cambio','ERFG','Estado del Resultado, por Función de Gasto','on'),
('113','41.12.40','Participación en las ganancias (pérdidas) de asociadas y negocios conjuntos que se contabilicen utilizando el método de la participación','ERFG','Estado del Resultado, por Función de Gasto','on'),
('114','41.12.50','Ganancias (pérdidas) de cambio en moneda extranjera','ERFG','Estado del Resultado, por Función de Gasto','on'),
('115','41.12.60','Resultados por unidades de reajuste','ERFG','Estado del Resultado, por Función de Gasto','on'),
('116','41.12.70','Ganancias (pérdidas) que surgen de diferencias entre importes en libros anteriores y el valor razonable de activos financieros reclasificados como medidos al valor razonable','ERFG','Estado del Resultado, por Función de Gasto','on'),
('117','41.12.80','Ganancia (pérdida) acumulada anteriormente reconocida en otro resultado integral que surge de la reclasificación de activos financieros de la categoría de medición de valor razonable con cambios en otro resultado integral a la de valor razonable con cambios en resultados','ERFG','Estado del Resultado, por Función de Gasto','on'),
('118','41.12.90','Ganancias (pérdidas) de cobertura por cobertura de un grupo de partidas con posiciones de riesgo compensadoras','ERFG','Estado del Resultado, por Función de Gasto','on'),
('119','41.12.00','Ganancia (pérdida), antes de impuestos','ERFG','Estado del Resultado, por Función de Gasto','on'),
('120','41.13.10','Gasto por impuestos a las ganancias','ERFG','Estado del Resultado, por Función de Gasto','on'),
('121','41.13.00','Ganancia (pérdida) procedente de operaciones continuadas','ERFG','Estado del Resultado, por Función de Gasto','on'),
('122','41.14.10','Ganancia (pérdida) procedente de operaciones discontinuadas','ERFG','Estado del Resultado, por Función de Gasto','on'),
('123','41.00.00','Ganancia (pérdida)','ERFG','Estado del Resultado, por Función de Gasto','on'),
('124','42.10.10','Ganancia (pérdida), atribuible a los propietarios de la controladora','ERFG','Estado del Resultado, por Función de Gasto','off'),
('125','42.10.20','Ganancia (pérdida), atribuible a participaciones no controladoras','ERFG','Estado del Resultado, por Función de Gasto','off'),
('126','42.12.10','Ganancia (pérdida) por acción básica en operaciones continuadas','ERFG','Estado del Resultado, por Función de Gasto','off'),
('127','42.12.20','Ganancia (pérdida) por acción básica','ERFG','Estado del Resultado, por Función de Gasto','off'),
('128','42.12.30','Ganancias (pérdida) diluida por acción procedente de operaciones continuadas','ERFG','Estado del Resultado, por Función de Gasto','off'),
('129','42.12.40','Ganancias (pérdida) diluida por acción','ERFG','Estado del Resultado, por Función de Gasto','off'),
('130','42.13.10','Deterioro de valor de ganancias y reversión de pérdidas por deterioro de valor (pérdidas por deterioro de valor) determinado de acuerdo con la NIIF 9','ERFG','Estado del Resultado, por Función de Gasto','off'),
('131','42.13.20','Ganancias (pérdidas) de cobertura por cobertura de un grupo de partidas con posiciones de riesgo compensadoras','ERFG','Estado del Resultado, por Función de Gasto','off'),
('132','42.13.30','Ganancia (pérdida) por acción básica en operaciones discontinuadas','ERFG','Estado del Resultado, por Función de Gasto','off'),
('133','42.13.40','Ganancias (pérdida) diluida por acción procedentes de operaciones discontinuadas','ERFG','Estado del Resultado, por Función de Gasto','off'),
('134','42.14.10','Ganancias por acción [bloque de texto]','ERFG','Estado del Resultado, por Función de Gasto','off'),
('135','42.15.10','Ganancia (pérdida) acumulada anteriormente reconocida en otro resultado integral que surge de la reclasificación de activos financieros de la categoría de medición de valor razonable con cambios en otro resultado integral a la de valor razonable con cambios en resultados','ERFG','Estado del Resultado, por Función de Gasto','off')



INSERT INTO ratios VALUES
('640','Total de Costos'),
('641','EbItda'),
('655','Tasa Impuesto General Empresas Chile'),
('656','Tasa Efectiva Empresa'),
('500','Capital de Trabajo 1 (Considerando Activos para la Venta)'),
('501','Capital de Trabajo 2 (No considerando Activos para la Venta)'),
('502','Liquidez (Considerando Activos para la Venta)'),
('503','lIquidez (No considerando Activos para la Venta)'),
('504','Razon Acida (Sin existencias y con Activos para la Venta)'),
('505','Razon Acida (Sin existencias y sin Activos para la Venta)'),
('506','Razon Acida según Norma SVS'),
('507','Razon de Disponible'),
('508','Razon de Tesoreria'),
('509','Rotación Cuentas x Pagar o Proveedores'),
('510','Rotación Cuentas x Cobrar o de Clientes'),
('511','Rotación de Existencias'),
('512','Plazo Promedio de Cobro'),
('513','Plazo Promedio Existencias'),
('514','Plazo Promedio de Proveedores'),
('515','Ciclo de Fabricación'),
('516','Ciclo de Maduración'),
('517','Ciclo de Caja'),
('518','Intervalo de Posicion Defensiva'),
('519','Considerando Activos para la Venta'),
('520','No Considerando Activos para la Venta'),
('521','Considerando Activos para la Venta'),
('522','No Considerando Activos para la Venta'),
('523','Tesoreria Activa'),
('524','Tesoreria Pasiva'),
('525','Considerando Activos para la Venta'),
('526','No Considerando Activos para la Venta'),
('527','Considerando Activos para la Venta'),
('528','No Considerando Activos para la Venta'),
('529','Considerando Activos para la Venta'),
('530','No Considerando Activos para la Venta'),
('531','Considerando Activos para la Venta'),
('532','No Considerando Activos para la Venta'),
('533','Considerando Activos para la Venta'),
('534','No Considerando Activos para la Venta'),
('535','Tasa de Proveedores'),
('536','Razon de Endeudamiento - Leverage'),
('537','Largo Plazo'),
('538','Corto Plazo'),
('539','Razon de Endeudamiento - Base Total'),
('540','Corto Plazo'),
('541','Largo Plazo'),
('542','Deuda Financiera - Leverage - Sobre Patrimonio'),
('543','Corto Plazo'),
('544','Largo Plazo'),
('545','Deuda Financiera - Leverage - Sobre Patrimonio + Pasivos'),
('546','Corto Plazo'),
('547','Largo Plazo'),
('548','Flujo de Efectivo a Deuda y Capitalización'),
('549','Margen de Utilidad Bruta'),
('550','Margen de Utilidad Neta'),
('551','Rentabilidad Operacional'),
('552','Retorno Sobre Activos (Return of Assets)'),
('553','Retorno sobre el Capital (Return Of Equity)'),
('554','Rotacion de los Activos'),
('555','Rotacion Activos Fijos'),
('556','Rentabilidad Metodo Dupont (CGU) - ROI'),
('557','Return of Sales (Retorno sobre Ventas)'),
('558','Descomposicion ROE'),
('559','Margen'),
('560','Rotacion del Activo'),
('561','Aplancamiento Financiero'),
('562','Descomposicion ROA'),
('563','Margen'),
('564','Rotacion Activos'),
('565','ROI'),
('566','ROIA'),
('567','ROIC'),
('568','ROIC (Tasa Efectiva)'),
('569','Deuda Generadora Intereses'),
('570','Pay Out'),
('571','Tasa de Reinversion'),
('572','Tasa de Crecimiemto g'),
('573','Q. Tobin'),
('574','Cobertura de Gastos Financieros'),
('575','Independencia Financiera'),
('576','Independencia Financiera Largo Plazo'),
('577','Capitales Permanentes'),
('578','Inmovilizados'),
('579','Inmovilizacion de Recursos'),
('580','Considerando Activos para la Venta'),
('581','No Considerando Activos para la Venta'),
('582','Tasa de Industrializacion'),
('583','Riqueza por la Explotacion'),
('584','Reforzamiento Patrimonio'),
('585','Cobertura de Prestamos'),
('586','Financiamiento de Inversiones'),
('587','Margen'),
('588','Rotacion Activos'),
('589','ROA'),
('590','Aplancamiento Financiero'),
('591','ROE'),
('592','Cremiento en las Ventas'),
('593','Crecimiento en el Resultado'),
('594','Ingresos de actividades ordinarias'),
('595','Costo de ventas'),
('596','Ganancia bruta'),
('597','Ganancias que surgen de la baja en cuentas de activos financieros medidos al costo amortizado'),
('598','Pérdidas que surgen de la baja en cuentas de activos financieros medidos al costo amortizado'),
('599','Otros ingresos, por función'),
('600','Costos de distribución'),
('601','Gasto de administración'),
('602','Otros gastos, por función'),
('603','Otras ganancias (pérdidas)'),
('604','Ingresos financieros'),
('605','Costos financieros'),
('606','Participación en las ganancias (pérdidas) de asociadas y negocios conjuntos que se contabilicen utilizando el método de la participación'),
('607','Diferencias de cambio'),
('608','Resultados por unidades de reajuste'),
('609','Ganancias (pérdidas) que surgen de la diferencia entre el valor libro anterior y el valor justo de activos financieros reclasificados medidos a valor razonable'),
('610','Ganancia (pérdida), antes de impuestos'),
('611','Gasto por impuestos a las ganancias'),
('612','Ganancia (pérdida) procedente de operaciones continuadas'),
('613','Ganancia (pérdida) procedente de operaciones discontinuadas'),
('614','GANANCIA POR PERDIDA (UTILIDAD PERDIDA DEL EJERCICIO)'),
('615','RESULTADO OPERACIONAL'),
('616','Capital de Trabajo / Ventas'),
('617','Rotacion Capital de Trabajo (Ventas/Capital de Trabajo)'),
('618','Rotacion de Cuentas por Cobrar'),
('619','Rotacion de Cuentas por Pagar'),
('620','Rotacion de Existencias'),
('621','Dias Cuentas por Cobrar'),
('622','Dias Cuentas por Pagar'),
('623','Dias Inventario'),
('624','Rotacion Activos de Largo Plazo'),
('625','Activos de Largo Plazo / Ventas'),
('626','Rotacion Planta y Equipos'),
('627','Liquidez (Considerando Activos para la Venta)'),
('628','lIquidez (No considerando Activos para la Venta)'),
('629','Razón Acida'),
('630','Razon Acida (Sin existencias y con Activos para la Venta)'),
('631','Razon Acida (Sin existencias y sin Activos para la Venta)'),
('632','Razon Acida según Norma SVS'),
('633','Razon de Disponible'),
('634','Razon de Tesoreria'),
('635','Leverage de Endeudamiento'),
('636','Razon de Endeudamiento'),
('637','Cobertura de Intereses'),
('638','Payout'),
('639','Tasa de Crecimiento g')

