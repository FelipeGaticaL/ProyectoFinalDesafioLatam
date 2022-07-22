const { Router } = require('express');
const db = require("../db/consultasEEFF");

const router = Router();


router.get("/activos", async (req, res) => {
    
    try {
        const resultado = await db.getActivos();
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/PasivosPatrimonio", async (req, res) => {
    try {
        const resultado = await db.getPasivosPatrimonio();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/EERR", async (req, res) => {
    try {
        const resultado = await db.getEERR();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/ActivoCP", async (req, res) => {
    try {
        const resultado = await db.getActivoCP();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/ActivoLP", async (req, res) => {
    try {
        const resultado = await db.getActivoLP();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/PasivoCP", async (req, res) => {
    try {
        const resultado = await db.getPasivoCP();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/PasivoLP", async (req, res) => {
    try {
        const resultado = await db.getPasivoLP();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/ResumenEstructuras", async (req, res) => {
    try {
        const resultado = await db.getResumenEstructuras();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})


router.get("/getEmpresas", async (req, res) => {
    try {
        const resultado = await db.getEmpresas();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/getTrimestre", async (req, res) => {
    try {
        const resultado = await db.getTrimestre();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})




module.exports = router;