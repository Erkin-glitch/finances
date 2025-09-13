const express = require("express");
const router = express.Router();
const { User } = require("../models");
const controller = require("../controllers/auth_controller");

router.get("/login", controller.loginPage)

router.post('/login', controller.login);  

router.get('/logout', controller.logout);  

router.post("/register", controller.register)

router.get("/register", controller.registerPage )

router.get("/edit__user/:id", controller.updatePage);

router.post("/update__user/:id", controller.update)

module.exports = router;