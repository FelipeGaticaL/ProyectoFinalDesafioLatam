const { Router } = require('express');
const db = require("../db/consultasEEFF");
const router = Router();

router.post("/carga", async (req, res) => {
   
  let buffer = req.files.target_file.data;
  let datos = buffer.toString('utf8').split("\n");
  let parseDatos = datos.map((texto) => {
      let entries = texto.split(";").map((item) => {
        return item.trim();
      });
      return entries;
      });

      //Eliminamos el último elemento del arreglo de arrelgos, porque viene vacío y esto afecta la carga final.
    parseDatos.pop()
    /* parseDatos.splice(-1,1) --> También funciona*/
    //console.log(parseDatos[Object.keys(parseDatos)[Object.keys(parseDatos).length - 1]]) //Obteniendo último valor
    try {
        const respuesta = await db.AgregandoDatos(parseDatos);
        res.status(200).redirect("/user/carga");
      } catch (error) {
        res.status(500).send(error);
      }
});


router.post("/cargaInfoSelect", async (req, res) => {
    try {
        const respuesta = await db.CreaTabla();
        res.status(200).redirect("/user/chart");
      } catch (error) {
        res.status(500).send(error);
      }
  });
  





module.exports = router;