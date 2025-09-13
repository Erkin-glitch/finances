const {Transaction} = require("../../../models")

module.exports = async (req, res) => {
 try {
    const { id } = req.params;
    const { title, amount, type } = req.body;

   

    const updated = await Transaction.update(
            {
                title,
                amount,
            type: type ? 'income' : 'expense'
            },
            {
                where: {
                    id
                }
            }
        );

    if (updated[0] === 0) {
      return res.status(404).send("Транзакция не найдена для обновления");
    }

    res.redirect("/balance");
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка при обновлении транзакции");
  }
};
