const express = require("express");
const router = express.Router();

const balance = require("./balance");
const auth = require("./auth"); 
const lang_m = require("../middleware/lang");

router.use("/:lang/balance", [lang_m], balance);

router.use("/:lang", lang_m, auth);

router.get("/:lang/", lang_m, (req, res) => {
  return res.render("index", { lang: req.params.lang });
});

router.get("/", (req, res) => {
  return res.redirect("/en/");
});

module.exports = router;
