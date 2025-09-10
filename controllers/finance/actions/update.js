const {Transaction} = require("../../../models")

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, isChecked, amount } = req.body;

    

    await Transaction.update(
      {
        title,
        amount,
        type: isChecked ? "income" : "expense"
      },
      {
        where: { id }
      }
    );
    console.log("Updated:");
    return res.redirect("/balance/");
  } catch (e) {
    console.log(e);
    return res.status(500).send(e.message);
  }
};
