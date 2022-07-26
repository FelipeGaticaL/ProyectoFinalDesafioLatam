const { Router } = require("express");
const bcrypt = require('bcrypt');
const fs = require('fs/promises');
const db = require("../db/users");
const { requiresAuth, verifyRoles } = require('../middlewares/requiresAuth');

const router = Router();

router.get("/", async (req, res) => {
    try {
        const users = await db.getUsers()
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    };
});

router.put("/users", requiresAuth, async (req, res) => {
    const user = req.body;
    const user2 = req.user
    
    try {
        user.password = await bcrypt.hash(user.password, 10);
        //Agregarmo user2.id para que se pueda hacer el match en BD y se realice efectivamente el cambio
        await db.updateUser(user,user2.id);
        res.status(200).send("Datos actualizados con éxito");
    } catch (error) {
        res.status(500).send(error);
        //console.log(error)
    };
});

router.put("/users2", requiresAuth, async (req, res) => {
    const user = req.body;
    const user2 = req.user
    
    try {
        user.password = await bcrypt.hash(user.password, 10);
        //Agregarmo user2.id para que se pueda hacer el match en BD y se realice efectivamente el cambio
        await db.updateUser2(user,user2.id);
        res.status(200).send("Datos actualizados con éxito");
    } catch (error) {
        res.status(500).send(error);
        //console.log(error)
    };
});

// solo un admin puede eliminar un usuario
//El usuario que se crea desde el register, es usuario con rol 1, es decir, no es adm
router.delete("/:id", verifyRoles(2), async (req, res) => {
    try {
        const { id } = req.params
        const user = await db.deleteUser(id);
        await fs.unlink(`public/${user.foto}`);
        local.window
        alert("Usuario eliminado con éxito")
        res.status(200).redirect("/");
    } catch (error) {
        res.status(500).send(error);
    };
});

module.exports = router;