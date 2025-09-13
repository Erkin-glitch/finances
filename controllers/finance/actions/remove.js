const {Transaction} = require("../../../models")

module.exports = async (req, res) => {
 try {
    const { id } = req.params;
    const deleted = await Transaction.destroy({ where: { id } });

    if (deleted === 0) {
      return res.status(404).send("Couldn't find transaction to remove");
    }

    res.redirect("/balance");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server mistake");
  }
};
