const express = require("express")
const router = express.Router()
const controller = require("../controllers/index")

router.get("/", controller.getIndex)
router.get('/add', (req, res) => {
  res.render('add'); 
});


module.exports = router;