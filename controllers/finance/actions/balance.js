const { Transaction, User } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.session.user.id;

      const lang = req.params.lang || 'en'; 

    if (!userId) {
      return res.status(401).send("User not authenticated");
    }

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

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
      user,
      lang,
      transactions,
      totalBalance,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка при загрузке транзакций");
  }
};
