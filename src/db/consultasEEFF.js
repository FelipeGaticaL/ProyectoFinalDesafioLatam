const db = require("./index.js");
const format = require("pg-format");

/* Implicantes */
/* Agregar Datos */
const AgregandoDatos = async (parseDatos) => {
    db.query(
        format(
            "INSERT INTO plan_cuentas (trimestre, rut, razon_social, dato, um, plan_de_cuentas, monto, taxonomia, tipo_de_Informe) VALUES %L",
            parseDatos
        ),
        [],
        (err, result) => {
            /*    console.log(err)
               console.log(result) */
            
            console.log("Se han insertado : " + result.rowCount + " lineas");
        }
    );
};

/* Datos Estáticos */
/* Tablas */
const getActivos = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `SELECT plan_de_cuentas, to_char("202106", 'fm999G999D00'), to_char("202109", 'fm999G999D00'),to_char("202112", 'fm999G999D00'),
    concat(round("202106"/(SELECT "202106" FROM T_60503000 WHERE num_id = 27)*100, 2)) ||'%' AS porcent202106,
    concat(round("202109"/(SELECT "202109" FROM T_60503000 WHERE num_id = 27)*100, 2)) ||'%' AS porcent202109,
    concat(round("202112"/(SELECT "202112" FROM T_60503000 WHERE num_id = 27)*100, 2)) ||'%' AS porcent202112
    FROM T_60503000
    WHERE num_id < 28
    `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};

const getPasivosPatrimonio = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
    SELECT plan_de_cuentas, to_char("202106", 'fm999G999D00'), to_char("202109", 'fm999G999D00'),to_char("202112", 'fm999G999D00'), 
concat(round("202106"/(SELECT "202106" FROM T_60503000 WHERE num_id = 60)*100, 2)) ||'%' AS porcent202106,
concat(round("202109"/(SELECT "202109" FROM T_60503000 WHERE num_id = 60)*100, 2)) ||'%' AS porcent202109,
concat(round("202112"/(SELECT "202112" FROM T_60503000 WHERE num_id = 60)*100, 2)) ||'%' AS porcent202112
FROM T_60503000
WHERE num_id > 27 AND num_id <50
    `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};

const getEERR = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
      SELECT plan_de_cuentas, to_char("202106", 'fm999G999D00'), to_char("202109", 'fm999G999D00'),to_char("202112", 'fm999G999D00'), 
concat(round("202106"/(SELECT "202106" FROM T_60503000 WHERE num_id = 100)*100, 2)) ||'%' AS porcent202106,
concat(round("202109"/(SELECT "202109" FROM T_60503000 WHERE num_id = 100)*100, 2)) ||'%' AS porcent202109,
concat(round("202112"/(SELECT "202112" FROM T_60503000 WHERE num_id = 100)*100, 2)) ||'%' AS porcent202112
FROM T_60503000
WHERE num_id > 99 AND num_id <124
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};

const getActivoCP = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
      SELECT plan_de_cuentas, to_char("202106", 'fm999G999D00'), to_char("202109", 'fm999G999D00'),to_char("202112", 'fm999G999D00'),
concat(round("202106"/(SELECT "202106" FROM T_60503000 WHERE num_id = 11)*100, 2)) ||'%' AS porcent202106,
concat(round("202109"/(SELECT "202109" FROM T_60503000 WHERE num_id = 11)*100, 2)) ||'%' AS porcent202109,
concat(round("202112"/(SELECT "202112" FROM T_60503000 WHERE num_id = 11)*100, 2)) ||'%' AS porcent202112
FROM T_60503000
WHERE num_id >= 1 AND num_id <= 11
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};

const getActivoLP = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
      SELECT plan_de_cuentas, to_char("202106", 'fm999G999D00'), to_char("202109", 'fm999G999D00'),to_char("202112", 'fm999G999D00'),
concat(round("202106"/(SELECT "202106" FROM T_60503000 WHERE num_id = 26)*100, 2)) ||'%' AS porcent202106,
concat(round("202109"/(SELECT "202109" FROM T_60503000 WHERE num_id = 26)*100, 2)) ||'%' AS porcent202109,
concat(round("202112"/(SELECT "202112" FROM T_60503000 WHERE num_id = 26)*100, 2)) ||'%' AS porcent202112
FROM T_60503000
WHERE num_id >= 12 AND num_id <= 26
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};


const getPasivoCP = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
      SELECT plan_de_cuentas, to_char("202106", 'fm999G999D00'), to_char("202109", 'fm999G999D00'),to_char("202112", 'fm999G999D00'), 
concat(round("202106"/(SELECT "202106" FROM T_60503000 WHERE num_id = 38)*100, 2)) ||'%' AS porcent202106,
concat(round("202109"/(SELECT "202109" FROM T_60503000 WHERE num_id = 38)*100, 2)) ||'%' AS porcent202109,
concat(round("202112"/(SELECT "202112" FROM T_60503000 WHERE num_id = 38)*100, 2)) ||'%' AS porcent202112
FROM T_60503000
WHERE num_id >= 28 AND num_id <= 38
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};


const getPasivoLP = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
      SELECT plan_de_cuentas, to_char("202106", 'fm999G999D00'), to_char("202109", 'fm999G999D00'),to_char("202112", 'fm999G999D00'), 
concat(round("202106"/(SELECT "202106" FROM T_60503000 WHERE num_id = 48)*100, 2)) ||'%' AS porcent202106,
concat(round("202109"/(SELECT "202109" FROM T_60503000 WHERE num_id = 48)*100, 2)) ||'%' AS porcent202109,
concat(round("202112"/(SELECT "202112" FROM T_60503000 WHERE num_id = 48)*100, 2)) ||'%' AS porcent202112
FROM T_60503000
WHERE num_id >= 39 AND num_id <= 48
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};

const getResumenEstructuras = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
      SELECT num_id, plan_de_cuentas, 
concat(round("202106"/(SELECT "202106" FROM T_60503000 WHERE num_id = 27)*100, 2)) ||'%' AS porcent202106,
concat(round("202109"/(SELECT "202109" FROM T_60503000 WHERE num_id = 27)*100, 2)) ||'%' AS porcent202109,
concat(round("202112"/(SELECT "202112" FROM T_60503000 WHERE num_id = 27)*100, 2)) ||'%' AS porcent202112
FROM T_60503000
WHERE num_id = 11 OR num_id = 26 OR num_id = 27
UNION
SELECT num_id, plan_de_cuentas, 
concat(round("202106"/(SELECT "202106" FROM T_60503000 WHERE num_id = 60)*100, 2)) ||'%' AS porcent202106,
concat(round("202109"/(SELECT "202109" FROM T_60503000 WHERE num_id = 60)*100, 2)) ||'%' AS porcent202109,
concat(round("202112"/(SELECT "202112" FROM T_60503000 WHERE num_id = 60)*100, 2)) ||'%' AS porcent202112
FROM T_60503000
WHERE num_id = 38 OR num_id = 48 OR num_id = 59 OR num_id = 60
ORDER BY 1
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};


/* Gráficos */

const getchartsStacksActivos = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
      SELECT 
      round("202106"/(SELECT "202106" FROM T_60503000 WHERE num_id = 27), 2) AS porcent202106,
      round("202109"/(SELECT "202109" FROM T_60503000 WHERE num_id = 27), 2) AS porcent202109,
      round("202112"/(SELECT "202112" FROM T_60503000 WHERE num_id = 27), 2) AS porcent202112
      FROM T_60503000
      WHERE num_id = 11 OR num_id = 26 
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};


const getchartsStacksPasivos = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
      SELECT  
      round("202106"/(SELECT "202106" FROM T_60503000 WHERE num_id = 60), 2) AS porcent202106,
      round("202109"/(SELECT "202109" FROM T_60503000 WHERE num_id = 60), 2) AS porcent202109,
      round("202112"/(SELECT "202112" FROM T_60503000 WHERE num_id = 60), 2) AS porcent202112
      FROM T_60503000
      WHERE num_id = 38 OR num_id = 48 OR num_id = 59   
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};

const getchartLiquidez = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
      SELECT "202106", "202109", "202112"
      FROM T_60503000
      WHERE num_id = 26 or num_id = 48 
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};

const getRLiquidezRAcida = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
        SELECT 
        round((SELECT "202106" FROM T_60503000 WHERE num_id = 26)/(SELECT "202106" FROM T_60503000 WHERE num_id = 38), 2) AS "202106" , 
        round((SELECT "202109" FROM T_60503000 WHERE num_id = 26)/(SELECT "202109" FROM T_60503000 WHERE num_id = 38), 2) AS "202109" , 
        round((SELECT "202112" FROM T_60503000 WHERE num_id = 26)/(SELECT "202112" FROM T_60503000 WHERE num_id = 38), 2) AS "202112" 
        FROM T_60503000
        LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 502) 
        WHERE num_id = 1
        UNION
        SELECT 
        round(((SELECT "202106" FROM T_60503000 WHERE num_id = 11)
              -(SELECT SUM("202106") FROM T_60503000 WHERE num_id >= 6 AND num_id <=7))
              /(SELECT "202106" FROM T_60503000 WHERE num_id = 38), 2) AS "202106", 
        round(((SELECT "202109" FROM T_60503000 WHERE num_id = 11)
              -(SELECT SUM("202109") FROM T_60503000 WHERE num_id >= 6 AND num_id <=7))
              /(SELECT "202109" FROM T_60503000 WHERE num_id = 38), 2) AS "202109", 
        round(((SELECT "202112" FROM T_60503000 WHERE num_id = 11)
              -(SELECT SUM("202112") FROM T_60503000 WHERE num_id >= 6 AND num_id <=7))
              /(SELECT "202112" FROM T_60503000 WHERE num_id = 38), 2) AS "202112"
        FROM T_60503000
        LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 504) 
        WHERE num_id = 1
      
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};

const getKdeTrabajo = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
      SELECT
	  round((SELECT "202106" FROM T_60503000 WHERE num_id = 11)
	  -(SELECT "202106" FROM T_60503000 WHERE num_id = 38), 2) AS "202106",
	  round((SELECT "202109" FROM T_60503000 WHERE num_id = 11)
	  -(SELECT "202109" FROM T_60503000 WHERE num_id = 38), 2) AS "202109",
	  round((SELECT "202112" FROM T_60503000 WHERE num_id = 11)
	  -(SELECT "202112" FROM T_60503000 WHERE num_id = 38), 2) AS "202112"
        FROM T_60503000
        LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 500) 
        WHERE num_id = 1
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};

const getRentabilidad = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
        SELECT "202106", "202109", "202112"
        FROM T_60503000
        WHERE num_id = 100 OR num_id= 102 OR num_id = 108
        
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};

const getEBITDA = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
        SELECT 
        (SELECT SUM("202106") FROM T_60503000 WHERE num_id = 108 
        OR num_id =112 OR num_id = 113 OR num_id = 114 OR num_id = 115 OR num_id = 118) AS "202106",
        (SELECT SUM("202109") FROM T_60503000 WHERE num_id = 108 
        OR num_id =112 OR num_id = 113 OR num_id = 114 OR num_id = 115 OR num_id = 118) AS "202109",
        (SELECT SUM("202112") FROM T_60503000 WHERE num_id = 108 
        OR num_id =112 OR num_id = 113 OR num_id = 114 OR num_id = 115 OR num_id = 118) AS "202112"
        FROM T_60503000
        LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 641) 
        WHERE num_id = 1
   
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};

const getREndeudamiento = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
        SELECT  
        round((SELECT "202106" FROM T_60503000 WHERE num_id = 38 )
              /(SELECT "202106" FROM T_60503000 WHERE num_id = 59),2) AS "202106",
        round((SELECT "202109" FROM T_60503000 WHERE num_id = 38 )
              /(SELECT "202109" FROM T_60503000 WHERE num_id = 59),2) AS "202109",
        round((SELECT "202112" FROM T_60503000 WHERE num_id = 38 )
              /(SELECT "202112" FROM T_60503000 WHERE num_id = 59),2) AS "202112"
        FROM T_60503000
        LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 538) 
        WHERE num_id = 1
        UNION
        SELECT  
        round((SELECT "202106" FROM T_60503000 WHERE num_id = 48 )
              /(SELECT "202106" FROM T_60503000 WHERE num_id = 59),2) AS "202106",
        round((SELECT "202109" FROM T_60503000 WHERE num_id = 48 )
              /(SELECT "202109" FROM T_60503000 WHERE num_id = 59),2) AS "202109",
        round((SELECT "202112" FROM T_60503000 WHERE num_id = 48 )
              /(SELECT "202112" FROM T_60503000 WHERE num_id = 59),2) AS "202112"
        FROM T_60503000
        LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 537) 
        WHERE num_id = 1
    
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};

const getCCE = async () => {
    const SQLQuery = {
        rowMode: "array",
        text: `
        SELECT 
        round(365/(((SELECT "202106" FROM T_60503000 WHERE num_id = 100)*1)
        /(SELECT "202106" FROM T_60503000 WHERE num_id = 4)),2) AS "202106",
        round(365/(((SELECT "202109" FROM T_60503000 WHERE num_id = 100)*1)
        /(SELECT "202109" FROM T_60503000 WHERE num_id = 4)),2) AS "202109",
        round(365/(((SELECT "202112" FROM T_60503000 WHERE num_id = 100)*1)
        /(SELECT "202112" FROM T_60503000 WHERE num_id = 4)),2) AS "202112"
    FROM T_60503000
    LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 512) 
    WHERE num_id = 1
    UNION
    SELECT 
        round(365/((SELECT "202106" FROM T_60503000 WHERE num_id = 101)
        /(SELECT SUM("202106") FROM T_60503000 WHERE num_id >= 6 AND num_id <= 7)),2) AS "202106",
        round(365/((SELECT "202109" FROM T_60503000 WHERE num_id = 101)
        /(SELECT SUM("202109") FROM T_60503000 WHERE num_id >= 6 AND num_id <= 7)),2) AS "202109",
        round(365/((SELECT "202112" FROM T_60503000 WHERE num_id = 101)
        /(SELECT SUM("202112") FROM T_60503000 WHERE num_id >= 6 AND num_id <= 7)),2) AS "202112"
    FROM T_60503000
    LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 513) 
    WHERE num_id = 1
    UNION
    SELECT 
        round(365/((SELECT "202106" FROM T_60503000 WHERE num_id = 101)
        /(SELECT SUM("202106") FROM T_60503000 WHERE num_id =30)),2) AS "202106",
    round(365/((SELECT "202109" FROM T_60503000 WHERE num_id = 101)
        /(SELECT SUM("202109") FROM T_60503000 WHERE num_id =30)),2) AS "202109",
    round(365/((SELECT "202112" FROM T_60503000 WHERE num_id = 101)
        /(SELECT SUM("202112") FROM T_60503000 WHERE num_id =30)),2) AS "202112"
    FROM T_60503000
    LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 514) 
    WHERE num_id = 1
    UNION
    SELECT 
    round((365/(((SELECT "202106" FROM T_60503000 WHERE num_id = 100)*1)
        /(SELECT "202106" FROM T_60503000 WHERE num_id = 4)))
        + 
    (365/((SELECT "202106" FROM T_60503000 WHERE num_id = 101)
        /(SELECT SUM("202106") FROM T_60503000 WHERE num_id >= 6 AND num_id <= 7))) 
        -
    (365/((SELECT "202106" FROM T_60503000 WHERE num_id = 101)
        /(SELECT SUM("202106") FROM T_60503000 WHERE num_id =30))),2) AS "202106",
    round((365/(((SELECT "202109" FROM T_60503000 WHERE num_id = 100)*1)
        /(SELECT "202109" FROM T_60503000 WHERE num_id = 4)))
        + 
    (365/((SELECT "202109" FROM T_60503000 WHERE num_id = 101)
        /(SELECT SUM("202109") FROM T_60503000 WHERE num_id >= 6 AND num_id <= 7))) 
        -
    (365/((SELECT "202109" FROM T_60503000 WHERE num_id = 101)
        /(SELECT SUM("202109") FROM T_60503000 WHERE num_id =30))),2) AS "202109",
    round((365/(((SELECT "202112" FROM T_60503000 WHERE num_id = 100)*1)
        /(SELECT "202112" FROM T_60503000 WHERE num_id = 4)))
        + 
    (365/((SELECT "202112" FROM T_60503000 WHERE num_id = 101)
        /(SELECT SUM("202112") FROM T_60503000 WHERE num_id >= 6 AND num_id <= 7))) 
        -
    (365/((SELECT "202112" FROM T_60503000 WHERE num_id = 101)
        /(SELECT SUM("202112") FROM T_60503000 WHERE num_id =30))),2) AS "202112"
    FROM T_60503000
    LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 517) 
    WHERE num_id = 1
    
      `,
    };
    const { rows } = await db.query(SQLQuery);
    return rows;
};

    /* Selección Empresas */

    const getEmpresas= async () => {
        const SQLQuery = {
            rowMode: "array",
            text: `
            SELECT DISTINCT ON (rut) razon_social FROM plan_cuentas
            WHERE rut < 61113000
            ORDER BY rut    
          `,
        };
        const { rows } = await db.query(SQLQuery);
        return rows;
    };


     /* Selección Trimestre */

     const getTrimestre= async () => {
        const SQLQuery = {
            rowMode: "array",
            text: `
            SELECT DISTINCT ON (trimestre) trimestre FROM  plan_cuentas
          `,
        };
        const { rows } = await db.query(SQLQuery);
        return rows;
    };


module.exports = {
    AgregandoDatos, getActivos, getPasivosPatrimonio,
    getEERR, getActivoCP, getActivoLP, getPasivoCP, getPasivoLP, getResumenEstructuras, getchartsStacksActivos, getchartsStacksPasivos, getchartLiquidez, getRLiquidezRAcida, getKdeTrabajo, getRentabilidad, getEBITDA, getREndeudamiento, getCCE, getEmpresas, getTrimestre
};