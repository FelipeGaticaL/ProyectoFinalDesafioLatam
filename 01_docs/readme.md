
A) Link de trello https://trello.com/b/queJSXt5/proyecto-full-stack

1.- Historias de usuario

Cliente: 

HU1 .- Como "cliente" quiero registrarme para poder iniciar sesión
HU4 .- Como "Cliente" quiero iniciar sesión para poder utilizar todos los elementos que entrega el servicios
HU5 .- Como "Cliente" quiero cargar y actualizar información de la Comisión Mercado Financiero para poder analizarla a través de los informes e indicadores que entrega la aplicación
HU6 .- Como "Cliente" quiero poder eliminar la información cargada para cargar información de otros periodos si es que lo veo necesario. 
HU7 .- Como "Cliente" quiero poder elegir a una empresa de la CMF y escoger los trimestres disponibles, para así realizar un análisis financiero. 
HU8 .- Como "Cliente" quiero poder hacer clicks sobre el panel de gestión de información, para visualizar ya sea informes de ponderación horizontal o vertical
HU9 .- Como "Cliente" quiero poder hacer click sobre el panel de gestión de gráficos, para sí seleccionar el que necesite de acuerdo a la lista desplegada por el programa
HU10 .- Como "Cliente" quiero al terminar de utilizar la aplicación a través de un botón para cerrar la sesión.

Administrador: 
HU1 .- Como "administrador" quiero validar las nuevas cuentas registradas para que el "cliente" las pueda utilizar
HU2 .- Como "administrador" quiero deshabilitar cuentas registradas que correspondan a clientes que decidieron no utilizar la aplicación



*****Posibles Upgrade futuros******

HU10 .- Como "Cliente", quiero que se queden guardados en un historial mis búsquedas anteriores para así tener un registro

HU11 .- Como "Cliente", quiero comparar los EEFF de los rubros para así tener una panorámica de el estado de ese rubro en el mercado nacional

HU12 .- Como "Cliente", quiero comparar los EEFF de las empresas que yo seleccione, para saber las similitudes y diferencias entre estas

2.- Configuración capeta GIT OK.

3.- DB Estructura Diagrama

https://app.diagrams.net/#G1Q_4JSWYtvT8AbXa43llSR3W3OrLwN4BL
Revisar en docs: 
01.1_BD_Conceptual
01.2_BD_FisicoConsultas

4.- Migración BD OK en 02_Migraciones

5.- Prototipo en Docs

6.- Instalaciones dependiencias OK.



INSTRUCCIONES DE INSTALACIÓN Y NOTAS

A) Base de datos: Seguir el orden que está en \src\db\db.sql

B) Una vez todo OK, crear usuario
    En perfil se puede cambiar de usuario corriente a usuario administrador
    Sólo el usuario administrador puede utilizar la ventana de Administración

C) Cargar desde la página "carga", los datos. Son 3 archivos, se encuentran en docs

D) Una vez cargado los 3 archivos, es posible, que no se muestren los tres trimestres en la lista deplegable en la pantalla de "carga", actualizar con un F5, y aparecerán. Estoy buscando la solución del location.reload() para que funcione correctamente
