const express = require("express")
const router = express.Router()
const controller = require("../controllers/index")

router.get("/", controller.getIndex)
router.get('/add', (req, res) => {
  res.render('add'); 
});
router.post("/redirect", controller.redirect)


module.exports = router;