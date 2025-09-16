

module.exports = (req, res) => {
    const lang = req.params.lang || 'en';
    return res.render("add", { lang })
}
