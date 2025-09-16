module.exports = (req, res) => {
    const lang = req.params.lang || 'en';
    res.render("register", { lang });
}