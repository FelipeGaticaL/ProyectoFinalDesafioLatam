const { Router } = require('express');
const { getUsers } = require("../db/users");
const db = require("../db/user_tasks");

const router = Router();

// public routes
router.get("/", async (req, res) => {
    const users = await getUsers();
    res.render("Login", { users });
});

router.get("/login", (req, res) => {
    res.render("Login");
});

router.get("/registro", (req, res) => {
    res.render("Registro");
});

// private routes
router.get("/perfil", (req, res) => {
    res.render("Perfil", { requiresAuth: true });
});

router.get("/user/carga", async (req, res) => {
    res.render("Carga", { requiresAuth: true });
});

router.get("/admin", async (req, res) => {
    const users = await getUsers();
    res.render("Admin", { users, requiresAuth: true });
});



//Charts
router.get("/user/chart", async (req, res) => {

    res.render("chart", { requiresAuth: true });
});

/* Gráficps */
router.get("/api/v1/chartsStacksActivos", async (req, res) => {

    try {
        const resultado = await db.getchartsStacksActivos();
        console.log()
        res.send(resultado);
    } catch (error) {
        res.status(500).send(error)
    }    

});

router.get("/api/v1/chartsStacksPasivos", async (req, res) => {

    try {
        const resultado = await db.getchartsStacksPasivos();
        res.send(resultado);
    } catch (error) {
        res.status(500).send(error)
    }    


/*     let stack = [
        [0.25, 0.25, 0.29],
        [0.51, 0.52, 0.49],
        [0.24, 0.23, 0.22]
    ];

    res.send(stack); */
});

router.get("/api/v1/chartLiquidez", async (req, res) => {

    try {
        const resultado = await db.getchartLiquidez();
        res.send(resultado);
    } catch (error) {
        res.status(500).send(error)
    }    

/*     let stack = [
        [63441.92, 62271.31, 62971.64],
        [61975.88, 62858.41, 64763.16]
    ];

    res.send(stack); */
});


router.get("/api/v1/RLiquidezRAcida", async (req, res) => {

    try {
        const resultado = await db.getRLiquidezRAcida();
        res.send(resultado);
    } catch (error) {
        res.status(500).send(error)
    }  

    /* let stack = [
        [1.85, 1.89, 1.81],
        [2.10, 2.03, 1.69]
    ];

    res.send(stack); */
});

router.get("/api/v1/KdeTrabajo", async (req, res) => {
    try {
        const resultado = await db.getKdeTrabajo();
        res.send(resultado);
    } catch (error) {
        res.status(500).send(error)
    }  
  /*   let stack = [
        [27026.33, 28572.48, 30985.09]
    ];

    res.send(stack); */
});

router.get("/api/v1/Rentabilidad", async (req, res) => {

    try {
        const resultado = await db.getRentabilidad();
        res.send(resultado);
    } catch (error) {
        res.status(500).send(error)
    }  




    /* let stack = [
        [71200.31, 106864.19, 147655.93],
        [17937.07, 21994.08, 28407.80],
        [8756.35, 8263.00, 8991.69]
    ];

    res.send(stack); */
});

router.get("/api/v1/EBITDA", async (req, res) => {


    try {
        const resultado = await db.getEBITDA();
        res.send(resultado);
    } catch (error) {
        res.status(500).send(error)
    }  

/*     let stack = [
        [8194.51, 7615.68, 7623.64]
    ];

    res.send(stack); */
});


router.get("/api/v1/REndeudamiento", async (req, res) => {

    try {
        const resultado = await db.getREndeudamiento();
        res.send(resultado);
    } catch (error) {
        res.status(500).send(error)
    }  


/* 
    let stack = [
        [2.18, 2.25, 2.22],
        [1.06, 1.10, 1.28]
    ];

    res.send(stack); */
});

router.get("/api/v1/CCE", async (req, res) => {

    try {
        const resultado = await db.getCCE();
        res.send(resultado);
    } catch (error) {
        res.status(500).send(error)
    }  
/*     let stack = [
        [118.88, 86.02, 78.45],
        [8.37, 5.46, 2.86],
        [186.58, 108.93, 89.5],
        [76.07, 28.38, 13.91]
    ];

    res.send(stack); */
});



/* TABLAS */

router.get("/api/v1/activos", async (req, res) => {
    
    try {
        const resultado = await db.getActivos();
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/v1/PasivosPatrimonio", async (req, res) => {
    try {
        const resultado = await db.getPasivosPatrimonio();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/v1/EERR", async (req, res) => {
    try {
        const resultado = await db.getEERR();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/v1/ActivoCP", async (req, res) => {
    try {
        const resultado = await db.getActivoCP();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/v1/ActivoLP", async (req, res) => {
    try {
        const resultado = await db.getActivoLP();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/v1/PasivoCP", async (req, res) => {
    try {
        const resultado = await db.getPasivoCP();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/v1/PasivoLP", async (req, res) => {
    try {
        const resultado = await db.getPasivoLP();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/v1/ResumenEstructuras", async (req, res) => {
    try {
        const resultado = await db.getResumenEstructuras();
        /* console.log(resultado) */
        res.end(JSON.stringify(resultado))
    } catch (error) {
        res.status(500).send(error)
    }
})




module.exports = router;