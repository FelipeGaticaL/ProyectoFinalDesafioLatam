const { default: axios } = require("axios");
const { Router } = require("express");
const db = require("../db/consultasEEFF");

const router = Router();


router.put("/query", async (req, res) => {
  
  let ValorTrimestre = req.body.ValorTrimestre;
  let valorEmpresa = req.body.valorEmpresa;

  try {
    let getPasivoLP = await db.getPasivoLP(valorEmpresa, ValorTrimestre );
    
    let getPasivoCP = await db.getPasivoCP(valorEmpresa, ValorTrimestre );
      let resultado1 = await db.getActivos(valorEmpresa, ValorTrimestre );
      let resultado2 = await db.getEERR(valorEmpresa, ValorTrimestre );
      let resultado3 = await db.getActivoCP(valorEmpresa, ValorTrimestre );
      let resultado4 = await db.getActivoLP(valorEmpresa, ValorTrimestre );
      let resultado5 = await db.getPasivosPatrimonio(valorEmpresa, ValorTrimestre );
   


      let concatenadorArray = [resultado1,resultado2, resultado3, resultado4, resultado5, getPasivoCP, getPasivoLP]
      res.send(concatenadorArray);
  } catch (error) {
      res.status(500).send(error)
  }  

});

router.put("/activos", async (req, res) => {
  let data = req.body

  try {
    
    //const data = await db.getActivos();
    
    let CountArreglo = data[0].length / 2 + 1;
    //***Lógica recibir todos los parametros para inyectar a innerHtml
    //**PARTE A) td, sin pintar
    let PartOne = [];
    let PartOneB = [];
    let PartOnec = [];

    //Dividimos todos los valores que tienen un formato td A)
    for (let i = 0; i < data.length; i++) {
      PartOne.push(data[i].slice(0, CountArreglo));
    }
    //Agregamos el td a cada valor

    for (let i = 0; i < PartOne.length; i++) {
      for (let j = 0; j < PartOne[0].length; j++) {
        PartOneB.push("<td>" + data[i][j] + "</td>");
      }
    }

    //**El resultado anterior lo dividimos la array en varias //split long array into smaller arrays
    for (let i = 0; i < PartOne.length; i++) {
      PartOnec.push(PartOneB.splice(0, PartOne[0].length));
    }
    //**PARTE A) td, con pintar

    let PartTwo = [];
    let PartTwoB = [];
    let PartTwoC = [];
    //Dividimos todos los valores que tienen un formato td B)
    for (let i = 0; i < data.length; i++) {
      PartTwo.push(data[i].slice(CountArreglo));
    }
    //Agregamos el <td class="text-light bg-secondary"> a cada valor
    for (let i = 0; i < PartTwo.length; i++) {
      for (let j = 0; j < PartTwo[0].length; j++) {
        PartTwoB.push(
          " <td class='text-light bg-secondary'>" + PartTwo[i][j] + "</td>"
        );
      }
    }
    //**El resultado anterior lo dividimos la array en varias //split long array into smaller arrays
    for (let i = 0; i < PartTwo.length; i++) {
      PartTwoC.push(PartTwoB.splice(0, PartTwo[0].length));
    }
    //Unir elementos td A y td B
    //Unir el interor de td A y td B, para que no aparezcan commas por el map, luego unimos, para finalmente englobar en <tr>

    let joinA = PartOnec.map((e, i) => {
      return PartOnec[i].join(" ");
    });
    let joinB = PartTwoC.map((e, i) => {
      return PartTwoC[i].join(" ");
    });
    let Union = joinA.map((e, i) => e + joinB[i]);
    let FinalUnion = [];
    for (let i = 0; i < PartOne.length; i++) {
      FinalUnion.push("<tr>" + Union[i] + "</tr>");
    }

    //**Inyección en el HTML
    let tableInyecHtml = FinalUnion.join(" ");
    res.end(JSON.stringify(tableInyecHtml));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/PasivosPatrimonio", async (req, res) => {
  let data = req.body
  try {
    //const data = await db.getPasivosPatrimonio();
    let CountArreglo = data[0].length / 2 + 1;
    let PartOne = [];
    let PartOneB = [];
    let PartOnec = [];
    for (let i = 0; i < data.length; i++) {
      PartOne.push(data[i].slice(0, CountArreglo));
    }
    for (let i = 0; i < PartOne.length; i++) {
      for (let j = 0; j < PartOne[0].length; j++) {
        PartOneB.push("<td>" + data[i][j] + "</td>");
      }
    }
    for (let i = 0; i < PartOne.length; i++) {
      PartOnec.push(PartOneB.splice(0, PartOne[0].length));
    }
    let PartTwo = [];
    let PartTwoB = [];
    let PartTwoC = [];
    for (let i = 0; i < data.length; i++) {
      PartTwo.push(data[i].slice(CountArreglo));
    }
    for (let i = 0; i < PartTwo.length; i++) {
      for (let j = 0; j < PartTwo[0].length; j++) {
        PartTwoB.push(
          " <td class='text-light bg-secondary'>" + PartTwo[i][j] + "</td>"
        );
      }
    }
    for (let i = 0; i < PartTwo.length; i++) {
      PartTwoC.push(PartTwoB.splice(0, PartTwo[0].length));
    }
    let joinA = PartOnec.map((e, i) => {
      return PartOnec[i].join(" ");
    });
    let joinB = PartTwoC.map((e, i) => {
      return PartTwoC[i].join(" ");
    });
    let Union = joinA.map((e, i) => e + joinB[i]);
    let FinalUnion = [];
    for (let i = 0; i < PartOne.length; i++) {
      FinalUnion.push("<tr>" + Union[i] + "</tr>");
    }
    let tableInyecHtml = FinalUnion.join(" ");
    res.end(JSON.stringify(tableInyecHtml));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/EERR", async (req, res) => {
  let data = req.body
  
  try {
    //const data = await db.getEERR();
    let CountArreglo = data[0].length / 2 + 1;
    let PartOne = [];
    let PartOneB = [];
    let PartOnec = [];
    for (let i = 0; i < data.length; i++) {
      PartOne.push(data[i].slice(0, CountArreglo));
    }
    for (let i = 0; i < PartOne.length; i++) {
      for (let j = 0; j < PartOne[0].length; j++) {
        PartOneB.push("<td>" + data[i][j] + "</td>");
      }
    }
    for (let i = 0; i < PartOne.length; i++) {
      PartOnec.push(PartOneB.splice(0, PartOne[0].length));
    }
    let PartTwo = [];
    let PartTwoB = [];
    let PartTwoC = [];
    for (let i = 0; i < data.length; i++) {
      PartTwo.push(data[i].slice(CountArreglo));
    }
    for (let i = 0; i < PartTwo.length; i++) {
      for (let j = 0; j < PartTwo[0].length; j++) {
        PartTwoB.push(
          " <td class='text-light bg-secondary'>" + PartTwo[i][j] + "</td>"
        );
      }
    }
    for (let i = 0; i < PartTwo.length; i++) {
      PartTwoC.push(PartTwoB.splice(0, PartTwo[0].length));
    }
    let joinA = PartOnec.map((e, i) => {
      return PartOnec[i].join(" ");
    });
    let joinB = PartTwoC.map((e, i) => {
      return PartTwoC[i].join(" ");
    });
    let Union = joinA.map((e, i) => e + joinB[i]);
    let FinalUnion = [];
    for (let i = 0; i < PartOne.length; i++) {
      FinalUnion.push("<tr>" + Union[i] + "</tr>");
    }
    let tableInyecHtml = FinalUnion.join(" ");
    res.end(JSON.stringify(tableInyecHtml));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/ActivoCP", async (req, res) => {
  let data = req.body
  try {
    //const data = await db.getActivoCP();
    let CountArreglo = data[0].length / 2 + 1;
    let PartOne = [];
    let PartOneB = [];
    let PartOnec = [];
    for (let i = 0; i < data.length; i++) {
      PartOne.push(data[i].slice(0, CountArreglo));
    }
    for (let i = 0; i < PartOne.length; i++) {
      for (let j = 0; j < PartOne[0].length; j++) {
        PartOneB.push("<td>" + data[i][j] + "</td>");
      }
    }
    for (let i = 0; i < PartOne.length; i++) {
      PartOnec.push(PartOneB.splice(0, PartOne[0].length));
    }
    let PartTwo = [];
    let PartTwoB = [];
    let PartTwoC = [];
    for (let i = 0; i < data.length; i++) {
      PartTwo.push(data[i].slice(CountArreglo));
    }
    for (let i = 0; i < PartTwo.length; i++) {
      for (let j = 0; j < PartTwo[0].length; j++) {
        PartTwoB.push(
          " <td class='text-light bg-secondary'>" + PartTwo[i][j] + "</td>"
        );
      }
    }
    for (let i = 0; i < PartTwo.length; i++) {
      PartTwoC.push(PartTwoB.splice(0, PartTwo[0].length));
    }
    let joinA = PartOnec.map((e, i) => {
      return PartOnec[i].join(" ");
    });
    let joinB = PartTwoC.map((e, i) => {
      return PartTwoC[i].join(" ");
    });
    let Union = joinA.map((e, i) => e + joinB[i]);
    let FinalUnion = [];
    for (let i = 0; i < PartOne.length; i++) {
      FinalUnion.push("<tr>" + Union[i] + "</tr>");
    }
    let tableInyecHtml = FinalUnion.join(" ");

    res.end(JSON.stringify(tableInyecHtml));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/ActivoLP", async (req, res) => {
  let data = req.body
  try {
    //const data = await db.getActivoLP();
    let CountArreglo = data[0].length / 2 + 1;
    let PartOne = [];
    let PartOneB = [];
    let PartOnec = [];
    for (let i = 0; i < data.length; i++) {
      PartOne.push(data[i].slice(0, CountArreglo));
    }
    for (let i = 0; i < PartOne.length; i++) {
      for (let j = 0; j < PartOne[0].length; j++) {
        PartOneB.push("<td>" + data[i][j] + "</td>");
      }
    }
    for (let i = 0; i < PartOne.length; i++) {
      PartOnec.push(PartOneB.splice(0, PartOne[0].length));
    }
    let PartTwo = [];
    let PartTwoB = [];
    let PartTwoC = [];
    for (let i = 0; i < data.length; i++) {
      PartTwo.push(data[i].slice(CountArreglo));
    }
    for (let i = 0; i < PartTwo.length; i++) {
      for (let j = 0; j < PartTwo[0].length; j++) {
        PartTwoB.push(
          " <td class='text-light bg-secondary'>" + PartTwo[i][j] + "</td>"
        );
      }
    }
    for (let i = 0; i < PartTwo.length; i++) {
      PartTwoC.push(PartTwoB.splice(0, PartTwo[0].length));
    }
    let joinA = PartOnec.map((e, i) => {
      return PartOnec[i].join(" ");
    });
    let joinB = PartTwoC.map((e, i) => {
      return PartTwoC[i].join(" ");
    });
    let Union = joinA.map((e, i) => e + joinB[i]);
    let FinalUnion = [];
    for (let i = 0; i < PartOne.length; i++) {
      FinalUnion.push("<tr>" + Union[i] + "</tr>");
    }
    let tableInyecHtml = FinalUnion.join(" ");

    res.end(JSON.stringify(tableInyecHtml));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/PasivoCP", async (req, res) => {
  let data = req.body
  
  try {
    //const data = await db.getPasivoCP();
    let CountArreglo = data[0].length / 2 + 1;
    let PartOne = [];
    let PartOneB = [];
    let PartOnec = [];
    for (let i = 0; i < data.length; i++) {
      PartOne.push(data[i].slice(0, CountArreglo));
    }
    for (let i = 0; i < PartOne.length; i++) {
      for (let j = 0; j < PartOne[0].length; j++) {
        PartOneB.push("<td>" + data[i][j] + "</td>");
      }
    }
    for (let i = 0; i < PartOne.length; i++) {
      PartOnec.push(PartOneB.splice(0, PartOne[0].length));
    }
    let PartTwo = [];
    let PartTwoB = [];
    let PartTwoC = [];
    for (let i = 0; i < data.length; i++) {
      PartTwo.push(data[i].slice(CountArreglo));
    }
    for (let i = 0; i < PartTwo.length; i++) {
      for (let j = 0; j < PartTwo[0].length; j++) {
        PartTwoB.push(
          " <td class='text-light bg-secondary'>" + PartTwo[i][j] + "</td>"
        );
      }
    }
    for (let i = 0; i < PartTwo.length; i++) {
      PartTwoC.push(PartTwoB.splice(0, PartTwo[0].length));
    }
    let joinA = PartOnec.map((e, i) => {
      return PartOnec[i].join(" ");
    });
    let joinB = PartTwoC.map((e, i) => {
      return PartTwoC[i].join(" ");
    });
    let Union = joinA.map((e, i) => e + joinB[i]);
    let FinalUnion = [];
    for (let i = 0; i < PartOne.length; i++) {
      FinalUnion.push("<tr>" + Union[i] + "</tr>");
    }
    let tableInyecHtml = FinalUnion.join(" ");
    res.end(JSON.stringify(tableInyecHtml));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/PasivoLP", async (req, res) => {
  let data = req.body
  try {
    //const data = await db.getPasivoLP();
    let CountArreglo = data[0].length / 2 + 1;
    let PartOne = [];
    let PartOneB = [];
    let PartOnec = [];
    for (let i = 0; i < data.length; i++) {
      PartOne.push(data[i].slice(0, CountArreglo));
    }
    for (let i = 0; i < PartOne.length; i++) {
      for (let j = 0; j < PartOne[0].length; j++) {
        PartOneB.push("<td>" + data[i][j] + "</td>");
      }
    }
    for (let i = 0; i < PartOne.length; i++) {
      PartOnec.push(PartOneB.splice(0, PartOne[0].length));
    }
    let PartTwo = [];
    let PartTwoB = [];
    let PartTwoC = [];
    for (let i = 0; i < data.length; i++) {
      PartTwo.push(data[i].slice(CountArreglo));
    }
    for (let i = 0; i < PartTwo.length; i++) {
      for (let j = 0; j < PartTwo[0].length; j++) {
        PartTwoB.push(
          " <td class='text-light bg-secondary'>" + PartTwo[i][j] + "</td>"
        );
      }
    }
    for (let i = 0; i < PartTwo.length; i++) {
      PartTwoC.push(PartTwoB.splice(0, PartTwo[0].length));
    }
    let joinA = PartOnec.map((e, i) => {
      return PartOnec[i].join(" ");
    });
    let joinB = PartTwoC.map((e, i) => {
      return PartTwoC[i].join(" ");
    });
    let Union = joinA.map((e, i) => e + joinB[i]);
    let FinalUnion = [];
    for (let i = 0; i < PartOne.length; i++) {
      FinalUnion.push("<tr>" + Union[i] + "</tr>");
    }
    let tableInyecHtml = FinalUnion.join(" ");
    res.end(JSON.stringify(tableInyecHtml));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/ResumenEstructuras", async (req, res) => {
  try {
    const resultado = await db.getResumenEstructuras();
   
    res.end(JSON.stringify(resultado));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/getEmpresas", async (req, res) => {
  try {
    const resultado = await db.getEmpresas();
    /* console.log(resultado) */
    res.end(JSON.stringify(resultado));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/getTrimestre", async (req, res) => {
  try {
    const resultado = await db.getTrimestre();
    /* console.log(resultado) */
    res.end(JSON.stringify(resultado));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/getTrimestreFiltrado", async (req, res) => {
  let datos =(req.body);
  try {
    
    const resultado = await db.getTrimestreFiltrado(datos);
   res.end(JSON.stringify(resultado));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/getRazonSocial", async (req, res) => {
  let datos = req.body;
  
  try {
    const resultado = await db.getRazonSocial(datos);
    let resultado2 = resultado.flat()
   console.log()
   res.send(resultado2);
  } catch (error) {
    res.status(500).send(error);
  }
});





module.exports = router;
