const { User } = require("../../../models")

module.exports= (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Server mistake');
    }
    res.redirect('/'); 
  });
};