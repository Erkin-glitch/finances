const { Transaction } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findByPk(id);

    if (!transaction) {
      return res.status(404).send("Транзакция не найдена");
    }

    res.render("edit", { transaction });
  } catch (error) {
    console.error("Ошибка при загрузке страницы редактирования:", error);
    return res.status(500).send("Ошибка сервера");
  }
};
