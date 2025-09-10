const { Transaction } = require("../../models");

module.exports = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({ order: [['createdAt', 'DESC']] });
    res.render("balance", { transactions });
  } catch (e) {
    console.error("Ошибка при получении транзакций:", e);
    res.status(500).send("Ошибка при получении данных");
  }
};
    