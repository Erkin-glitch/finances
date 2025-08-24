const express = require("express")
const router = express.Router()
const controller = require("../controllers/index")

router.get("/", controller.getIndex)
router.get("/admin", controller.getAdmin)
router.post("/form", controller.form)


module.exports = router;