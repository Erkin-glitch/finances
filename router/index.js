const express = require("express");
const router = express.Router();
const { Transaction } = require("../models");

// Главная страница — показываем транзакции
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.findAll({ order: [['createdAt', 'DESC']] });
    res.render("index", { transactions });
  } catch (error) {
    res.status(500).send("Ошибка сервера");
  }
});

// Страница добавления транзакции (форма)
router.get("/add", (req, res) => {
  res.render("add");
});

// Обработка формы добавления транзакции
router.post("/add", async (req, res) => {
  try {
    const { title, amount, type } = req.body;
    await Transaction.create({ title, amount, type });
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Ошибка при добавлении транзакции");
  }
});

module.exports = router;
