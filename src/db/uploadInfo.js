const db = require("./index.js");
const format = require("pg-format");
const db2 = require("../db/consultasEEFF");

/* Agregar Datos */
let AgregandoDatos = async (parseDatos) => {
  db.query(
    format(
      "INSERT INTO plan_cuentas (trimestre, rut, razon_social, dato, um, plan_de_cuentas, monto, taxonomia, tipo_de_Informe) VALUES %L",
      parseDatos
    ),
    [],
    (err, result) => {
      /*    console.log(err)
               console.log(result) */
      console.log(err)
      console.log("Se han insertado : " + result.rowCount + " lineas");

    }
  );
};


const CreaTabla = async () => {

try{
  
  const SQLQuery = {
  text: `
  DROP TABLE IF EXISTS allacount
        `,
};
const resultDrop = await db.query(SQLQuery);

let allruts = await db2.getEmpresas();
let rut = []
for (i = 0; i < allruts.length; i++) {
  rut.push(allruts[i][0])
}

const trimestres = await db2.getTrimestre();

let CreateTalbe = trimestres.map((e)=>{
  return `"${e}" NUMERIC DEFAULT NULL`
})
let CreateTalbetext = CreateTalbe.join(' , ')
let textCreateTable = `CREATE TABLE  IF NOT EXISTS allacount (
  num_id INT DEFAULT NULL,
  rut INT DEFAULT NULL,
  id_cuenta VARCHAR(500) DEFAULT NULL,
  tipo_informe VARCHAR(500) DEFAULT NULL,
  plan_de_cuentas VARCHAR(500) DEFAULT NULL, ${CreateTalbetext} )`

  const SQLQuery2 = {
    text: textCreateTable,
  };

const resultCreate = await db.query(SQLQuery2);

//Insertar datos
let interT1 = trimestres.map(function (x) {
  return `coalesce("${x}", 0) AS "${x}" ,`
})
let lastIndex = trimestres.length - 1;
let result1 = interT1[lastIndex].substring(0, interT1[0].length - 1);
interT1.pop();
interT1.push(result1);
let interT1b = interT1.join(" ");

let interT2 = trimestres.map(function (j) {
  return `(${j}) ,`
})
let result2 = interT2[lastIndex].substring(0, interT2[0].length - 1);
interT2.pop();
interT2.push(result2);
let interT2b = interT2.join(" ");

let interT3 = trimestres.map(function (h) {
  return `"${h}" numeric ,`
})
let result3 = interT3[lastIndex].substring(0, interT3[0].length - 1);
interT3.pop();
interT3.push(result3);
let interT3b = interT3.join(" ");

let interT4 = trimestres.map(function (i) {
  return `"${i}" ,`
})

let result4 = interT4[lastIndex].substring(0, interT4[0].length - 1);
interT4.pop();
interT4.push(result4);
let interT4b = interT4.join(" ");


/* let ConsultaInterpolada = rut.map(function (x) {
  return `INSERT INTO AllAcount (num_id, rut, id_cuenta, tipo_informe, plan_de_cuentas, ${interT4b})
    SELECT  num_id, rut, id_cuenta, tipo_informe, plan_de_cuentas, ${interT1b}
  FROM  crosstab(
     $$
     SELECT num_id, rut,  id_cuenta, tipo_informe, plan_de_cuentas, trimestre, round(monto/1000000,2)
     FROM   plan_cuentas 
     LEFT JOIN cuentas ON plan_cuentas.plan_de_cuentas = cuentas.cuenta
     WHERE rut = ${x} AND tipo_de_informe = 'ESF C/NC' AND estatus_cuenta = 'on'
     ORDER  BY 1, 2, 3, 4, 5
     $$
   , 'VALUES ${interT2b}') 
   AS plan (num_id INT, rut INT, id_cuenta VARCHAR, tipo_informe VARCHAR, plan_de_cuentas VARCHAR, ${interT3b});
   
   INSERT INTO AllAcount (num_id, rut, id_cuenta, tipo_informe, plan_de_cuentas, ${interT4b})
  SELECT  num_id, rut, id_cuenta, tipo_informe, plan_de_cuentas, ${interT1b}
  FROM  crosstab(
     $$
     SELECT num_id, rut, id_cuenta, tipo_informe, plan_de_cuentas, trimestre, round(monto/1000000,2)
     FROM   plan_cuentas 
     LEFT JOIN cuentas ON plan_cuentas.plan_de_cuentas = cuentas.cuenta
     WHERE rut = ${x} AND tipo_de_informe = 'ERFG' AND estatus_cuenta = 'on'
     ORDER  BY 1, 2, 3, 4, 5
     $$
   , 'VALUES ${interT2b}') 
   AS plan (num_id INT, rut INT, id_cuenta VARCHAR, tipo_informe VARCHAR, plan_de_cuentas VARCHAR, ${interT3b});
  `
}) */



//let text = ConsultaInterpolada.join(' ')
//let textStrings = text.toString()

for (i = 0 ; i<rut.length ; i++){
 const SQLQuery = {
    rowMode: "array",
    text: `
    INSERT INTO AllAcount (num_id, rut, id_cuenta, tipo_informe, plan_de_cuentas, ${interT4b})
    SELECT  num_id, rut, id_cuenta, tipo_informe, plan_de_cuentas, ${interT1b}
    FROM  crosstab(
       $$
       SELECT num_id, rut,  id_cuenta, tipo_informe, plan_de_cuentas, trimestre, round(monto/1000000,2)
       FROM   plan_cuentas 
       LEFT JOIN cuentas ON plan_cuentas.plan_de_cuentas = cuentas.cuenta
       WHERE rut = ${rut[i]} AND tipo_de_informe = 'ESF C/NC' AND estatus_cuenta = 'on'
       ORDER  BY 1, 2, 3, 4, 5
       $$
     , 'VALUES ${interT2b}') 
     AS plan (num_id INT, rut INT, id_cuenta VARCHAR, tipo_informe VARCHAR, plan_de_cuentas VARCHAR, ${interT3b});
     

     INSERT INTO AllAcount (num_id, rut, id_cuenta, tipo_informe, plan_de_cuentas, ${interT4b})
      SELECT  num_id, rut, id_cuenta, tipo_informe, plan_de_cuentas, ${interT1b}
      FROM  crosstab(
     $$
     SELECT num_id, rut, id_cuenta, tipo_informe, plan_de_cuentas, trimestre, round(monto/1000000,2)
     FROM   plan_cuentas 
     LEFT JOIN cuentas ON plan_cuentas.plan_de_cuentas = cuentas.cuenta
     WHERE rut = ${rut[i]} AND tipo_de_informe = 'ERFG' AND estatus_cuenta = 'on'
     ORDER  BY 1, 2, 3, 4, 5
     $$
   , 'VALUES ${interT2b}') 
   AS plan (num_id INT, rut INT, id_cuenta VARCHAR, tipo_informe VARCHAR, plan_de_cuentas VARCHAR, ${interT3b});
     
     
     `,
  };
  const result = await db.query(SQLQuery);
  
  console.log(result)
}


}catch(err){
  console.log(err)
}
  
  

};

const EliminarTodo = async () => {
  db.query(
    `
          DELETE FROM plan_cuentas;
          DROP TABLE allacount
          `,
    (err, res) => {
      /*  console.log(err, res) */
    }
  );
};




module.exports = { AgregandoDatos, CreaTabla, EliminarTodo }