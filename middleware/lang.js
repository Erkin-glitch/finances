module.exports = (req, res, next) => {
	if (req.params.lang && ["ru", "en"].includes(req.params.lang)) {
		next();
	} else {
		return res.redirect(`/en/`)
	}
};