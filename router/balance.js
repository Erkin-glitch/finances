const express = require("express");
const router = express.Router();
const controller = require("../controllers/finance");

router.get("/", controller.balance);

router.get("/add", controller.addPage);

router.post("/add", controller.add);

router.get("/edit/:id", controller.edit);

router.post("/edit/:id", controller.update);

router.get("/remove/:id", controller.remove);

module.exports = router;
