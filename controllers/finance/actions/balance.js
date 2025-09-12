const { Transaction } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      order: [["createdAt", "DESC"]],
    });

    let totalBalance = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === "income") {
        totalBalance += parseFloat(transaction.amount);
      } else if (transaction.type === "expense") {
        totalBalance -= parseFloat(transaction.amount);
      }
    });

    res.render("balance", {
      transactions,
      totalBalance, 
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка при загрузке транзакций");
  }
};
