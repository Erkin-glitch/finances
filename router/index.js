const express = require("express");
const router = express.Router();
const { Transaction } = require("../models");
const controller = require("../controllers/finance")
const balance = require("../router/balance")

router.get("/", (req, res) => {
    return res.render("index")
})


module.exports = router;