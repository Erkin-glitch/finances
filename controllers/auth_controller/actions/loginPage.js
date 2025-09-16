module.exports = (req, res) => {
     const lang = req.params.lang || 'en';
  res.render("login", { lang });
}