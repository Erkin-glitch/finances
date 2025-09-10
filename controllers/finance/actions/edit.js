const {Transaction} = require("../../../models")

module.exports = async (req, res) => {
 try {
    const { id } = req.params;
    const transaction = await Transaction.findByPk(id);

    if (!transaction) {
      return res.status(404).send("Transaction not found");
    }

    res.render("edit", { transaction });
  } catch (error) {
    console.error(error);
    res.status(500).send("Couldn't load the edit page");
  }
};
