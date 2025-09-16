const express = require("express");
const router = express.Router();

const balance = require("./balance");
const auth = require("./auth"); 
const lang_m = require("../middleware/lang");
const auth_m = require("../middleware/auth");

// Для путей с балансом
router.use("/:lang/balance", [lang_m, auth_m], balance);

// Для путей с авторизацией
router.use("/:lang", lang_m, auth);

// Стартовая страница (index)
router.get("/:lang/", lang_m, (req, res) => {
  return res.render("index", { lang: req.params.lang });
});

// Редирект на английскую версию по умолчанию
router.get("/", (req, res) => {
  return res.redirect("/en/");
});

module.exports = router;
