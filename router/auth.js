const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth_controller");

// Группа маршрутов с языком
router.get("/:lang/login", controller.loginPage);
router.post("/:lang/login", controller.login);

router.get("/:lang/logout", controller.logout);

router.get("/:lang/register", controller.registerPage);
router.post("/:lang/register", controller.register);

router.get("/:lang/edit__user/:id", controller.updatePage);
router.post("/:lang/update__user/:id", controller.update);

module.exports = router;
