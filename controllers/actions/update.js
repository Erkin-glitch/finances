const { Transaction } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, isChecked, amount } = req.body;

    // if (!title) {
    //   return res.status(400).send("title bosh geldi");
    // }

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
    console.log("Обновлено:");
    return res.redirect("/");
  } catch (e) {
    console.log(e);
    return res.status(500).send(e.message);
  }
};
