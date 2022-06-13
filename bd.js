
const { Pool } = require('pg')
const format = require('pg-format');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "1234",
    database: "proyecto",
    port: 5432
})

const AgregandoDatos = async(parseDatos)=>{
    /* console.log(parseDatos) */
    pool.query(format('INSERT INTO plan_cuentas (trimestre, rut, razon_social, dato, um, plan_de_cuentas, monto, taxonomia, tipo_de_Informe) VALUES %L', parseDatos),[], (err, result)=>{
        console.log(err)
        console.log(result)
        /* console.log("Se han insertado : "+result.rowCount+ " lineas"); */
      });
    
}

module.exports = { AgregandoDatos };