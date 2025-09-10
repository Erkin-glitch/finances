const {Transaction} = require("../../../models")

module.exports = async (req, res) => {
 try {
    const transactions = await Transaction.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.render("balance", { transactions, user: req.session.user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка при загрузке транзакций");
  }
};
    