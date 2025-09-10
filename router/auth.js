const express = require("express");
const router = express.Router();
const { User } = require("../models");
const controller = require("../controllers/auth_controller");

router.get("/login", controller.loginPage)

router.post('/login', controller.login);  // Обработка логина

router.get('/logout', controller.logout);  // Выход пользователя

router.post("/register", controller.register)

router.get("/register", controller.registerPage )
module.exports = router;