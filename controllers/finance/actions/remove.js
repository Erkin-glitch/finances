const {Transaction} = require("../../../models")

module.exports = async (req, res) => {
 try {
    const { id } = req.params;
    const deleted = await Transaction.destroy({ where: { id } });

    if (deleted === 0) {
      return res.status(404).send("Транзакция не найдена для удаления");
    }

    res.redirect("/balance");
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка при удалении транзакции");
  }
};
