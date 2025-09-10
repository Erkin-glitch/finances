const express = require("express");
const router = express.Router();
const controller = require("../controllers/finance");

// Путь /balance/ — показывает список транзакций
router.get("/", controller.balance);

// Показать форму добавления
router.get("/add", controller.addPage);

// Обработка добавления
router.post("/add", controller.add);

// Показать форму редактирования
router.get("/edit/:id", controller.edit);

// Обработка редактирования
router.post("/edit/:id", controller.update);

// Удаление транзакции
router.get("/remove/:id", controller.remove);

module.exports = router;
