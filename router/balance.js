const express = require("express");
const router = express.Router();
const { Transaction } = require("../models");
const controller = require("../controllers");

router.get("/balance", async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.render("balance", { transactions });
  } catch (error) {
    res.status(500).send("Ошибка сервера");
  }
});

router.get("/add", (req, res) => {
  res.render("add");
});

router.post("/add", async (req, res) => {
  try {
    const { title, amount, type } = req.body;
    await Transaction.create({ title, amount, type });
    res.redirect("/balance");
  } catch (error) {
    res.status(500).send("Ошибка при добавлении транзакции");
  }
});

router.get("/remove/:id", controller.remove);
router.get("/edit/:id", controller.edit);
router.post("/edit/:id", controller.update);

module.exports = router; // <-- ЭТО ТОЖЕ ОБЯЗАТЕЛЬНО
