const express = require("express")
const router = express.Router()
const controller = require("../controllers/index")

router.get("/", controller.getIndex)
router.post("/form", controller.form)


module.exports = router;