const { Router } = require('express');
const db = require("../db/consultasEEFF");



const router = Router();

router.put("/consultaChart", async (req, res) => {

  let datos = req.body



  try {
    let CCE = await db.getCCE(datos);
    let EBITDA = await db.getEBITDA(datos);
    let REndeudamiento =  await db.getREndeudamiento(datos);
      let StacksActivos = await db.getchartsStacksActivos(datos);
      let StacksPasivos = await db.getchartsStacksPasivos(datos);
      let chartLiquidez = await db.getchartLiquidez(datos);
      let RLiquidezRAcida = await db.getRLiquidezRAcida(datos);
      let KdeTrabajo = await db.getKdeTrabajo(datos);
      let Rentabilidad = await db.getRentabilidad(datos);
      

      let concatenadorArray = [StacksActivos,StacksPasivos, chartLiquidez, RLiquidezRAcida, KdeTrabajo, Rentabilidad, EBITDA, REndeudamiento, CCE]
      res.send(concatenadorArray);
  } catch (error) {
      res.status(500).send(error)
  }    

});



/* /charts/ */


/* Gráficos */

router.get("/chartsStacksActivos", async (req, res) => {

  try {
      const resultado = await db.getchartsStacksActivos();
    
      res.send(resultado);
  } catch (error) {
      res.status(500).send(error)
  }    

});

router.get("/chartsStacksPasivos", async (req, res) => {

  try {
      const resultado = await db.getchartsStacksPasivos();
      res.send(resultado);
  } catch (error) {
      res.status(500).send(error)
  }    

});

router.get("/chartLiquidez", async (req, res) => {

  try {
      const resultado = await db.getchartLiquidez();
      res.send(resultado);
  } catch (error) {
      res.status(500).send(error)
  }    


});


router.get("/RLiquidezRAcida", async (req, res) => {

  try {
      const resultado = await db.getRLiquidezRAcida();
      res.send(resultado);
  } catch (error) {
      res.status(500).send(error)
  }  

  
});

router.get("/KdeTrabajo", async (req, res) => {
  try {
      const resultado = await db.getKdeTrabajo();
      res.send(resultado);
  } catch (error) {
      res.status(500).send(error)
  }  

});

router.get("/Rentabilidad", async (req, res) => {

  try {
      const resultado = await db.getRentabilidad();
      res.send(resultado);
  } catch (error) {
      res.status(500).send(error)
  }  

});

router.get("/EBITDA", async (req, res) => {


  try {
      const resultado = await db.getEBITDA();
      res.send(resultado);
  } catch (error) {
      res.status(500).send(error)
  }  

});


router.get("/REndeudamiento", async (req, res) => {

  try {
      const resultado = await db.getREndeudamiento();
      res.send(resultado);
  } catch (error) {
      res.status(500).send(error)
  }  

});

router.get("/CCE", async (req, res) => {

  try {
      const resultado = await db.getCCE();

      res.send(resultado);
  } catch (error) {
      res.status(500).send(error)
  }  

});






module.exports = router;