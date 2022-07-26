const { Router } = require('express');
const { getUsers } = require("../db/users");
const db = require("../db/consultasEEFF");
const { requiresAuth, verifyRoles } = require('../middlewares/requiresAuth');

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


router.get("/user/chart", async (req, res) => {

    res.render("chart", { requiresAuth: true });
});








module.exports = router;