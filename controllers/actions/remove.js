const { Transaction } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleted id:", id);

    const num = await Transaction.destroy({ where: { id } });

    if (num === 1) {
      return res.redirect("/");
    } else {
      return res.status(400).send("couldn't delete transaction");
    }
  } catch (e) {
    console.error(e);
    return res.status(500).send(e.message);
  }
};
