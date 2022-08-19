const db = require("./index.js");
const format = require("pg-format");
let JsonData = require("../db/trimestres.json");

/* Implicantes */


/* Datos Estáticos */
/* Tablas */
let getActivos = async (valorEmpresa, ValorTrimestre) => {

  let rut = valorEmpresa;
  let interT1 = ValorTrimestre.map(function (x) {
    return `to_char("${x}", 'fm999G999D00'),`;
  });

  let interT2 = ValorTrimestre.map(function (x) {
    return `concat(round("${x}"/(SELECT "${x}" FROM allaccount WHERE num_id = 27 AND  rut = ${rut})*100, 2)) ||'%' AS porcent${x},`;
  });

  //--> Proceso para sacarle la coma final, causa error en Postgresql

  let lastIndex = interT2.length - 1;
  let result2 = interT2[lastIndex].substring(0, interT2[0].length - 1);
  interT2.pop();
  interT2.push(result2);

  let interT1b = interT1.join(" ");
  let interT2b = interT2.join(" ");

  let inter3 = `FROM allaccount WHERE rut = ${rut} AND num_id < 28 ORDER BY num_id ASC`;
  let text = `SELECT plan_de_cuentas, ${interT1b} ${interT2b} ${inter3}`;
/*   console.log(text) */
  const SQLQuery = {
    rowMode: "array",
    text: text,
  };

  const { rows } = await db.query(SQLQuery);

  return rows;
};

let getPasivosPatrimonio = async (valorEmpresa, ValorTrimestre) => {
  let rut = valorEmpresa;
  let interT1 = ValorTrimestre.map(function (x) {
    return `to_char("${x}", 'fm999G999D00'),`;
  });

  let interT2 = ValorTrimestre.map(function (x) {
    return `concat(round("${x}"/(SELECT "${x}" FROM allaccount WHERE num_id = 27 AND  rut = ${rut})*100, 2)) ||'%' AS porcent${x},`;
  });

  //--> Proceso para sacarle la coma final, causa error en Postgresql

  let lastIndex = interT2.length - 1;
  let result2 = interT2[lastIndex].substring(0, interT2[0].length - 1);
  interT2.pop();
  interT2.push(result2);

  let interT1b = interT1.join(" ");
  let interT2b = interT2.join(" ");

  let inter3 = `FROM allaccount WHERE rut = ${rut} AND num_id > 27 AND num_id <=60 ORDER BY num_id ASC`;
  let text = `SELECT plan_de_cuentas, ${interT1b} ${interT2b} ${inter3}`;

  const SQLQuery = {
    rowMode: "array",
    text: text,
  };

  const { rows } = await db.query(SQLQuery);

  return rows;
};

let getEERR = async (valorEmpresa, ValorTrimestre) => {
  
  let rut = valorEmpresa;
  let interT1 = ValorTrimestre.map(function (x) {
    return `to_char("${x}", 'fm999G999D00'),`;
  });

  
  let interT2 = ValorTrimestre.map(function (x) {
    return `concat(round("${x}"/(SELECT "${x}" FROM allaccount WHERE num_id = 100 AND  rut = ${rut})*100, 2)) ||'%' AS porcent${x},`;
  });

  //--> Proceso para sacarle la coma final, causa error en Postgresql

  let lastIndex = interT2.length - 1;
  let result2 = interT2[lastIndex].substring(0, interT2[0].length - 1);
  interT2.pop();
  interT2.push(result2);

  let interT1b = interT1.join(" ");
  let interT2b = interT2.join(" ");

  let inter3 = `FROM allaccount WHERE rut = ${rut} AND num_id > 99 AND num_id <124 ORDER BY num_id ASC`;
  let text = `SELECT plan_de_cuentas, ${interT1b} ${interT2b} ${inter3}`;
  
  
  const SQLQuery = {
    rowMode: "array",
    text: text,
  };

  const { rows } = await db.query(SQLQuery);
  return rows;
};

let getActivoCP = async (valorEmpresa, ValorTrimestre) => {
  let rut = valorEmpresa;
  let interT1 = ValorTrimestre.map(function (x) {
    return `to_char("${x}", 'fm999G999D00'),`;
  });

  let interT2 = ValorTrimestre.map(function (x) {
    return `concat(round("${x}"/(SELECT "${x}" FROM allaccount WHERE num_id = 11 AND  rut = ${rut})*100, 2)) ||'%' AS porcent${x},`;
  });

  //--> Proceso para sacarle la coma final, causa error en Postgresql

  let lastIndex = interT2.length - 1;
  let result2 = interT2[lastIndex].substring(0, interT2[0].length - 1);
  interT2.pop();
  interT2.push(result2);

  let interT1b = interT1.join(" ");
  let interT2b = interT2.join(" ");

  let inter3 = `FROM allaccount WHERE rut = ${rut} AND num_id >= 1 AND num_id <= 11 ORDER BY num_id ASC`;
  let text = `SELECT plan_de_cuentas, ${interT1b} ${interT2b} ${inter3}`;

  const SQLQuery = {
    rowMode: "array",
    text: text,
  };

  const { rows } = await db.query(SQLQuery);
  return rows;
};

let getActivoLP = async (valorEmpresa, ValorTrimestre) => {
  let rut = valorEmpresa;
  let interT1 = ValorTrimestre.map(function (x) {
    return `to_char("${x}", 'fm999G999D00'),`;
  });

  let interT2 = ValorTrimestre.map(function (x) {
    return `concat(round("${x}"/(SELECT "${x}" FROM allaccount WHERE num_id = 26 AND  rut = ${rut})*100, 2)) ||'%' AS porcent${x},`;
  });

  //--> Proceso para sacarle la coma final, causa error en Postgresql

  let lastIndex = interT2.length - 1;
  let result2 = interT2[lastIndex].substring(0, interT2[0].length - 1);
  interT2.pop();
  interT2.push(result2);

  let interT1b = interT1.join(" ");
  let interT2b = interT2.join(" ");

  let inter3 = `FROM allaccount WHERE rut = ${rut} AND num_id >= 12 AND num_id <= 26 ORDER BY num_id ASC`;
  let text = `SELECT plan_de_cuentas, ${interT1b} ${interT2b} ${inter3}`;

  const SQLQuery = {
    rowMode: "array",
    text: text,
  };

  const { rows } = await db.query(SQLQuery);
  return rows;
};

let getPasivoCP = async (valorEmpresa, ValorTrimestre) => {
  let rut = valorEmpresa;
  let interT1 = ValorTrimestre.map(function (x) {
    return `to_char("${x}", 'fm999G999D00'),`;
  });

  let interT2 = ValorTrimestre.map(function (x) {
    return `concat(round("${x}"/(SELECT "${x}" FROM allaccount WHERE num_id = 38 AND  rut = ${rut})*100, 2)) ||'%' AS porcent${x},`;
  });

  //--> Proceso para sacarle la coma final, causa error en Postgresql

  let lastIndex = interT2.length - 1;
  let result2 = interT2[lastIndex].substring(0, interT2[0].length - 1);
  interT2.pop();
  interT2.push(result2);

  let interT1b = interT1.join(" ");
  let interT2b = interT2.join(" ");

  let inter3 = `FROM allaccount WHERE rut = ${rut} AND num_id >= 28 AND num_id <= 38 ORDER BY num_id ASC`;
  let text = `SELECT plan_de_cuentas, ${interT1b} ${interT2b} ${inter3}`;

  const SQLQuery = {
    rowMode: "array",
    text: text,
  };

  const { rows } = await db.query(SQLQuery);
  return rows;
};

let getPasivoLP = async (valorEmpresa, ValorTrimestre) => {
  let rut = valorEmpresa;
  let interT1 = ValorTrimestre.map(function (x) {
    return `to_char("${x}", 'fm999G999D00'),`;
  });

  let interT2 = ValorTrimestre.map(function (x) {
    return `concat(round("${x}"/(SELECT "${x}" FROM allaccount WHERE num_id = 48 AND  rut = ${rut})*100, 2)) ||'%' AS porcent${x},`;
  });

  //--> Proceso para sacarle la coma final, causa error en Postgresql

  let lastIndex = interT2.length - 1;
  let result2 = interT2[lastIndex].substring(0, interT2[0].length - 1);
  interT2.pop();
  interT2.push(result2);

  let interT1b = interT1.join(" ");
  let interT2b = interT2.join(" ");

  let inter3 = `FROM allaccount WHERE rut = ${rut} AND num_id >= 39 AND num_id <= 48 ORDER BY num_id ASC`;
  let text = `SELECT plan_de_cuentas, ${interT1b} ${interT2b} ${inter3}`;

  const SQLQuery = {
    rowMode: "array",
    text: text,
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

const getchartsStacksActivos = async (datos) => {
  //*** Lógica 1 */
  let trimestre = datos.ValorTrimestre;
  let AllTrimestres = JsonData;
  let matchTrimestresName = [];
  for (i = 0; i < trimestre.length; i++) {
    let valor = trimestre[i];
    let valor2 = AllTrimestres.filter((e) => e.includes(valor));
    matchTrimestresName.push(valor2);
  }
  //*** Lógica 2 */
  let rut = datos.valorEmpresa;
  let interT1 = trimestre.map(function (x) {
    return `round("${x}"/(SELECT "${x}" FROM allaccount WHERE num_id = 27 AND rut = ${rut}), 2) AS porcent${x},`;
  });

  //--> Proceso para sacarle la coma final, causa error en Postgresql

  let lastIndex = trimestre.length - 1;
  let result2 = interT1[lastIndex].substring(0, interT1[0].length - 1);
  interT1.pop();
  interT1.push(result2);
  let interT1b = interT1.join(" ");
  let text =
    "SELECT " +
    interT1b +
    ` FROM allaccount WHERE rut = ${rut} AND num_id = 11 UNION SELECT ` +
    interT1b +
    ` FROM allaccount WHERE rut = ${rut} AND num_id = 26`;

  let SQLQuery = {
    rowMode: "array",
    text: text,
  };
  const { rows } = await db.query(SQLQuery);
  let allData = rows.concat(matchTrimestresName);
  return allData;
};

const getchartsStacksPasivos = async (datos) => {
  //**Lógica */
  //*** Lógica 1 */
  let trimestre = datos.ValorTrimestre;
  let AllTrimestres = JsonData;
  let matchTrimestresName = [];
  for (i = 0; i < trimestre.length; i++) {
    let valor = trimestre[i];
    let valor2 = AllTrimestres.filter((e) => e.includes(valor));
    matchTrimestresName.push(valor2);
  }
  //*** Lógica 2 */
  let rut = datos.valorEmpresa;
  let interT1 = trimestre.map(function (x) {
    return `round("${x}"/(SELECT "${x}" FROM allaccount WHERE num_id = 27 AND rut = ${rut}), 2) AS porcent${x},`;
  });

  //--> Proceso para sacarle la coma final, causa error en Postgresql

  let lastIndex = trimestre.length - 1;
  let result2 = interT1[lastIndex].substring(0, interT1[0].length - 1);
  interT1.pop();
  interT1.push(result2);
  let interT1b = interT1.join(" ");
  /* let text = "SELECT " + interT1b + ` FROM allaccount WHERE rut = ${rut} AND num_id = 38 UNION SELECT ` + interT1b + ` FROM allaccount WHERE rut = ${rut} AND num_id = 48 `+ "UNION SELECT "+  interT1b +  ` FROM allaccount WHERE rut = ${rut} AND num_id = 59 `
   */
  // El retorno es desordenado, por eso un select a la vez
  let CP =
    "SELECT " + interT1b + ` FROM allaccount WHERE rut = ${rut} AND num_id = 38`;
  let LP =
    "SELECT " + interT1b + ` FROM allaccount WHERE rut = ${rut} AND num_id = 48`;
  let P =
    "SELECT " + interT1b + ` FROM allaccount WHERE rut = ${rut} AND num_id = 59`;
  let SQLQuery1 = {
    rowMode: "array",
    text: CP,
  };
  let SQLQuery2 = {
    rowMode: "array",
    text: LP,
  };
  let SQLQuery3 = {
    rowMode: "array",
    text: P,
  };
  let return1 = await db.query(SQLQuery1);
  let return2 = await db.query(SQLQuery2);
  let return3 = await db.query(SQLQuery3);

  let CP1 = return1.rows;
  let LP1 = return2.rows;
  let P1 = return3.rows;
  let totalData = CP1.concat(LP1, P1, matchTrimestresName);

  return totalData;
};

const getchartLiquidez = async (datos) => {
  //*** Lógica 1 */
  let trimestre = datos.ValorTrimestre;
  let AllTrimestres = JsonData;
  let matchTrimestresName = [];
  for (i = 0; i < trimestre.length; i++) {
    let valor = trimestre[i];
    let valor2 = AllTrimestres.filter((e) => e.includes(valor));
    matchTrimestresName.push(valor2);
  }
  //*** Lógica 2 */
  let rut = datos.valorEmpresa;
  let interT1 = trimestre.map(function (x) {
    return `"${x}",`;
  });

  //--> Proceso para sacarle la coma final, causa error en Postgresql
  let lastIndex = trimestre.length - 1;
  let result2 = interT1[lastIndex].substring(0, interT1[0].length - 1);
  interT1.pop();
  interT1.push(result2);
  let interT1b = interT1.join(" ");
  let textA =
    "SELECT " + interT1b + ` FROM allaccount WHERE rut = ${rut} AND num_id = 26`;
  let textB =
    "SELECT " + interT1b + ` FROM allaccount WHERE rut = ${rut} AND num_id = 48`;
  const SQLQuery1 = {
    rowMode: "array",
    text: textA,
  };
  const SQLQuery2 = {
    rowMode: "array",
    text: textB,
  };

  const AC = await db.query(SQLQuery1);
  const PC = await db.query(SQLQuery2);
  let totalData = AC.rows.concat(PC.rows, matchTrimestresName);

  return totalData;
};

const getRLiquidezRAcida = async (datos) => {
  //*** Lógica 1 */
  let trimestre = datos.ValorTrimestre;
  let AllTrimestres = JsonData;
  let matchTrimestresName = [];
  for (i = 0; i < trimestre.length; i++) {
    let valor = trimestre[i];
    let valor2 = AllTrimestres.filter((e) => e.includes(valor));
    matchTrimestresName.push(valor2);
  }
  //*** Lógica 2 */
  let rut = datos.valorEmpresa;
  let interT1 = trimestre.map(function (x) {
    return `round((SELECT "${x}" FROM allaccount WHERE rut= ${rut} AND num_id = 26)/(SELECT "${x}" FROM allaccount WHERE rut= ${rut} AND num_id = 38), 2) AS "${x}" ,`;
  });
  //--> Proceso para sacarle la coma final A, causa error en Postgresql
  let lastIndex = trimestre.length - 1;
  let result1 = interT1[lastIndex].substring(0, interT1[0].length - 1);
  interT1.pop();
  interT1.push(result1);
  let interT1b = interT1.join(" ");
  let inter2 = trimestre.map(function (x) {
    return `round(((SELECT "${x}" FROM allaccount WHERE rut= ${rut} AND num_id = 11)
    -(SELECT SUM("${x}") FROM allaccount WHERE rut= ${rut} AND num_id >= 6 AND num_id <=7))
    /(SELECT "${x}" FROM allaccount WHERE rut= ${rut} AND num_id = 38), 2) AS "${x}" ,`;
  });
  //--> Proceso para sacarle la coma final A, causa error en Postgresql
  let result2 = inter2[lastIndex].substring(0, inter2[0].length - 1);
  inter2.pop();
  inter2.push(result2);
  let inter2b = inter2.join(" ");
  let RL =
    "SELECT " +
    interT1b +
    ` FROM allaccount LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 502) WHERE rut=${rut} AND num_id = 1`;
  let RA =
    "SELECT " +
    inter2b +
    ` FROM allaccount LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 504) WHERE rut=${rut} AND num_id = 1`;

  const SQLQuery1 = {
    rowMode: "array",
    text: RL,
  };
  const SQLQuery2 = {
    rowMode: "array",
    text: RA,
  };

  const RLresult = await db.query(SQLQuery1);
  const RAresult = await db.query(SQLQuery2);
  let totalData = RLresult.rows.concat(RAresult.rows, matchTrimestresName);
  return totalData;
};

const getKdeTrabajo = async (datos) => {
  //*** Lógica 1 */
  let trimestre = datos.ValorTrimestre;
  let AllTrimestres = JsonData;
  let matchTrimestresName = [];
  for (i = 0; i < trimestre.length; i++) {
    let valor = trimestre[i];
    let valor2 = AllTrimestres.filter((e) => e.includes(valor));
    matchTrimestresName.push(valor2);
  }
  //*** Lógica 2 */
  let rut = datos.valorEmpresa;
  let interT1 = trimestre.map(function (x) {
    return `round((SELECT "${x}" FROM allaccount WHERE  rut=${rut} AND num_id = 11)
  -(SELECT "${x}" FROM allaccount WHERE  rut=${rut} AND num_id = 38), 2) AS "${x}" ,`;
  });
  //--> Proceso para sacarle la coma final A, causa error en Postgresql
  let lastIndex = trimestre.length - 1;
  let result1 = interT1[lastIndex].substring(0, interT1[0].length - 1);
  interT1.pop();
  interT1.push(result1);
  let interT1b = interT1.join(" ");
  let text =
    "SELECT " +
    interT1b +
    ` FROM allaccount LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 500)  WHERE rut=${rut} AND num_id = 1 `;

  const SQLQuery = {
    rowMode: "array",
    text: text,
  };
  const ktrabajo = await db.query(SQLQuery);
  let totalData = ktrabajo.rows.concat(matchTrimestresName);
  return totalData;
};

const getRentabilidad = async (datos) => {
  //*** Lógica 1 */
  let trimestre = datos.ValorTrimestre;
  let AllTrimestres = JsonData;
  let matchTrimestresName = [];
  for (i = 0; i < trimestre.length; i++) {
    let valor = trimestre[i];
    let valor2 = AllTrimestres.filter((e) => e.includes(valor));
    matchTrimestresName.push(valor2);
  }
  //*** Lógica 2 */
  let rut = datos.valorEmpresa;
  let interT1 = trimestre.map(function (x) {
    return `"${x}" ,`;
  });
  //--> Proceso para sacarle la coma final A, causa error en Postgresql
  let lastIndex = trimestre.length - 1;
  let result1 = interT1[lastIndex].substring(0, interT1[0].length - 1);
  interT1.pop();
  interT1.push(result1);
  let interT1b = interT1.join(" ");

  let IAO =
    "SELECT " +
    interT1b +
    ` FROM allaccount WHERE rut= ${rut} AND num_id = 100 `;
  let GB =
    "SELECT " +
    interT1b +
    ` FROM allaccount WHERE rut= ${rut} AND num_id = 102 `;
  let GAO =
    "SELECT " +
    interT1b +
    ` FROM allaccount WHERE rut= ${rut} AND num_id = 108 `;
  const SQLQuery1 = {
    rowMode: "array",
    text: IAO,
  };
  const SQLQuery2 = {
    rowMode: "array",
    text: GB,
  };
  const SQLQuery3 = {
    rowMode: "array",
    text: GAO,
  };

  const IAOresult = await db.query(SQLQuery1);
  const GBOresult = await db.query(SQLQuery2);
  const GAOresult = await db.query(SQLQuery3);
  let totalData = IAOresult.rows.concat(GBOresult.rows,GAOresult.rows,matchTrimestresName);
  return totalData
};

const getEBITDA = async (datos) => {
  
  //*** Lógica 1 */
  let trimestre = datos.ValorTrimestre;
  let AllTrimestres = JsonData;
  let matchTrimestresName = [];
  for (i = 0; i < trimestre.length; i++) {
    let valor = trimestre[i];
    let valor2 = AllTrimestres.filter((e) => e.includes(valor));
    matchTrimestresName.push(valor2);
  }
  //*** Lógica 2 */
  let rut = datos.valorEmpresa;
  let interT1 = trimestre.map(function (x) {
    return `(SELECT "${x}" FROM allaccount WHERE num_id = 108 AND rut= ${rut})
    +coalesce((SELECT "${x}" FROM allaccount WHERE num_id = 112 AND rut= ${rut}),0)
    +coalesce((SELECT "${x}" FROM allaccount WHERE num_id = 113 AND rut= ${rut}),0)
    +coalesce((SELECT "${x}" FROM allaccount WHERE num_id = 114 AND rut= ${rut}),0)
    +coalesce((SELECT "${x}" FROM allaccount WHERE num_id = 115 AND rut= ${rut}),0)
    +coalesce((SELECT "${x}" FROM allaccount WHERE num_id = 118 AND rut= ${rut}),0) AS "${x}" ,`;
  });
  //--> Proceso para sacarle la coma final A, causa error en Postgresql
  let lastIndex = trimestre.length - 1;
  let result1 = interT1[lastIndex].substring(0, interT1[0].length - 1);
  interT1.pop();
  interT1.push(result1);
  let interT1b = interT1.join(" ");
  let text = "SELECT " + interT1b + ` FROM allaccount LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 641)   WHERE rut= ${rut} AND num_id = 1`



  let SQLQuery = {
    rowMode: "array",
    text: text,
  };
  let textresult = await db.query(SQLQuery);
  let getEBITDA = textresult.rows.concat(matchTrimestresName);

  return getEBITDA

};

const getREndeudamiento = async (datos) => {
  //*** Lógica 1 */
  let trimestre = datos.ValorTrimestre;
  let AllTrimestres = JsonData;
  let matchTrimestresName = [];
  for (i = 0; i < trimestre.length; i++) {
    let valor = trimestre[i];
    let valor2 = AllTrimestres.filter((e) => e.includes(valor));
    matchTrimestresName.push(valor2);
  }
  //*** Lógica 2 */
  let rut = datos.valorEmpresa;
  let interT1 = trimestre.map(function (x) {
    return `round((SELECT "${x}" FROM allaccount WHERE rut=${rut} AND num_id = 38 )
    /(SELECT "${x}" FROM allaccount WHERE rut=${rut} AND num_id = 59),2) AS "${x}" ,`;
  });
  //--> Proceso para sacarle la coma final A, causa error en Postgresql
  let lastIndex = trimestre.length - 1;
  let result1 = interT1[lastIndex].substring(0, interT1[0].length - 1);
  interT1.pop();
  interT1.push(result1);
  let interT1b = interT1.join(" ");
  
  let interT2 = trimestre.map(function (x) {
    return `round((SELECT "${x}" FROM allaccount WHERE rut=${rut} AND num_id = 48 )
    /(SELECT "${x}" FROM allaccount WHERE rut=${rut} AND num_id = 59),2) AS "${x}" ,`;
  });
  let result2 = interT2[lastIndex].substring(0, interT2[0].length - 1);
  interT2.pop();
  interT2.push(result2);
  let interT2b = interT2.join(" ");
  //Afecta el orden el query con UNION
  let texta = "SELECT " + interT1b + ` FROM allaccount LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 538)  WHERE rut=${rut} AND num_id = 1 `
  let textb = "SELECT "+  interT2b+ ` FROM allaccount LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 537)  WHERE rut=${rut} AND num_id = 1`
    let SQLQuery1 = {
    rowMode: "array",
    text: texta,
  };
  let SQLQuery2 = {
    rowMode: "array",
    text: textb,
  };
  const textaResult = await db.query(SQLQuery1);
  const textbResult = await db.query(SQLQuery2);
  let TotalRE = textaResult.rows.concat(textbResult.rows, matchTrimestresName)
  return TotalRE;
};

const getCCE = async (datos) => {
  //Lógica 1
  let trimestre = datos.ValorTrimestre;
  let AllTrimestres = JsonData;
  let matchTrimestresName = [];
  for (i = 0; i < trimestre.length; i++) {
    let valor = trimestre[i];
    let valor2 = AllTrimestres.filter((e) => e.includes(valor));
    matchTrimestresName.push(valor2);
  }
  let rut = datos.valorEmpresa;
  //*** Plazo Promedio de Cobro*/
 
  let interT1 = trimestre.map(function (x) {
    return `round(365/(((SELECT "${x}" FROM allaccount WHERE rut= ${rut} AND num_id = 100)*1)
    /(SELECT "${x}" FROM allaccount WHERE rut= ${rut} AND num_id = 4)),2) AS "${x}" ,`;
  });
  //--> Delete Comma
  let lastIndex = trimestre.length - 1;
  let result1 = interT1[lastIndex].substring(0, interT1[0].length - 1);
  interT1.pop();
  interT1.push(result1);
  let interT1b = interT1.join(" ");
  
   //*** Plazo Promedio Existencias*/
   let inter2 = trimestre.map(function (x) {
     return `round(365/((SELECT "${x}" FROM allaccount WHERE rut= ${rut} AND num_id = 101)
     /(SELECT SUM("${x}") FROM allaccount WHERE rut= ${rut} AND num_id >= 6 AND num_id <= 7)),2) AS "${x}" ,`;
   });
   //--> Delete Comma
   let result2 = inter2[lastIndex].substring(0, inter2[0].length - 1);
   inter2.pop();
   inter2.push(result2);
   let inter2b = inter2.join(" ");
  
  //*** Plazo Promedio Proveedores*/
   let inter3 = trimestre.map(function (x) {
     return `round(365/((SELECT "${x}" FROM allaccount WHERE rut = ${rut} AND num_id = 101)
     /(SELECT SUM("${x}") FROM allaccount WHERE rut = ${rut} AND num_id =30)),2) AS "${x}" ,`;
   });
   //--> Delete Comma
   let result3 = inter3[lastIndex].substring(0, inter3[0].length - 1);
   inter3.pop();
   inter3.push(result3);
   let inter3b = inter3.join(" ");
   
   //*** Ciclo de Caja*/
   let inter4 = trimestre.map(function (x) {
    return `round((365/(((SELECT "${x}" FROM allaccount WHERE rut = ${rut} AND num_id = 100)*1)
    /(SELECT "${x}" FROM allaccount WHERE rut = ${rut} AND num_id = 4)))
    + 
  (365/((SELECT "${x}" FROM allaccount WHERE rut = ${rut} AND num_id = 101)
    /(SELECT SUM("${x}") FROM allaccount WHERE rut = ${rut} AND num_id >= 6 AND num_id <= 7))) 
    -
  (365/((SELECT "${x}" FROM allaccount WHERE rut = ${rut} AND num_id = 101)
    /(SELECT SUM("${x}") FROM allaccount WHERE rut = ${rut} AND num_id =30))),2) AS "${x}" ,`;
  });
  //--> Delete Comma
  let result4 = inter4[lastIndex].substring(0, inter4[0].length - 1);
  inter4.pop();
  inter4.push(result4);
  let inter4b = inter4.join(" ");
  
  // Unión de sentencia SQL

  let PPC = "SELECT " + interT1b + ` FROM allaccount LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 512) WHERE rut= ${rut} AND num_id = 1`
  let PPE = "SELECT " + inter2b+ ` FROM allaccount  LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 513)  WHERE rut= ${rut} AND num_id = 1`
  let PPP = "SELECT " + inter3b + ` FROM allaccount LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 514)  WHERE rut = ${rut} AND num_id = 1`
  let CCC = "SELECT " +inter4b + ` FROM allaccount LEFT JOIN ratios ON (num_id = 1) = (id_ratio = 517) WHERE rut = ${rut} AND num_id = 1`



  //Query
  let SQLQuery1 = {
    rowMode: "array",
    text: PPC,
  };
  let SQLQuery2 = {
    rowMode: "array",
    text: PPE,
  };
  let SQLQuery3 = {
    rowMode: "array",
    text: PPP,
  };
  let SQLQuery4 = {
    rowMode: "array",
    text: CCC,
  };

  //Concat

  const PPCResult = await db.query(SQLQuery1);
  const PPEResult = await db.query(SQLQuery2);
  const PPPResult = await db.query(SQLQuery3);
  const CCCResult = await db.query(SQLQuery4);

  let TotalCCC = PPCResult.rows.concat(PPEResult.rows, PPPResult.rows, CCCResult.rows, matchTrimestresName)

  return TotalCCC
  
};

/* Selección Empresas */

const getEmpresas = async () => {
  const SQLQuery = {
    rowMode: "array",
    text: `
    SELECT DISTINCT rut, razon_social FROM plan_cuentas WHERE tipo_de_informe ='ESF C/NC'
    EXCEPT 
    SELECT DISTINCT rut, razon_social FROM plan_cuentas WHERE tipo_de_informe ='ERNG'
    ORDER BY razon_social
          `,
  };
  const { rows } = await db.query(SQLQuery);
  
  
  
  return rows;
};

/* Selección Trimestre */

const getTrimestre = async () => {
  const SQLQuery = {
    rowMode: "array",
    text: `
            SELECT DISTINCT ON (trimestre) trimestre FROM  plan_cuentas
          `,
  };
  const { rows } = await db.query(SQLQuery);
  return rows;
};

const getTrimestreFiltrado = async (datos) => {
  
  
  const SQLQuery = {
    rowMode: "array",
    text: `
            SELECT DISTINCT trimestre FROM  plan_cuentas WHERE rut = ${datos} AND tipo_de_informe = 'ESF C/NC' ORDER BY trimestre
          `,
  };
  const { rows } = await db.query(SQLQuery);
  return rows;
};

const getRazonSocial = async (datos) => {
  
  
  const SQLQuery = {
    rowMode: "array",
    text: `
            SELECT DISTINCT razon_social FROM  plan_cuentas WHERE rut = ${datos}
          `,
  };
  const { rows } = await db.query(SQLQuery);
  return rows;
};


module.exports = {
  getActivos,
  getPasivosPatrimonio,
  getEERR,
  getActivoCP,
  getActivoLP,
  getPasivoCP,
  getPasivoLP,
  getResumenEstructuras,
  getchartsStacksActivos,
  getchartsStacksPasivos,
  getchartLiquidez,
  getRLiquidezRAcida,
  getKdeTrabajo,
  getRentabilidad,
  getEBITDA,
  getREndeudamiento,
  getCCE,
  getEmpresas,
  getTrimestre,
  getTrimestreFiltrado,
  getRazonSocial

};
