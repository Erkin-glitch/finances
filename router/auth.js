const express = require("express");
const router = express.Router();
const { User } = require("../models");
const controller = require("../controllers/auth_controller");


router.get("/login", (req, res) => {
    return res.render("login")
})

module.exports = router;