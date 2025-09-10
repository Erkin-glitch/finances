const {Transaction} = require("../../../models")

module.exports =  async (req, res) => {
   try {
    const { title, amount, type } = req.body;
    if (!title || !amount || !type) {
      return res.status(400).send("FILL IN ALL THE BLANKS");
    }

    await Transaction.create({ title, amount, type });
    res.redirect("/balance");
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка при добавлении транзакции");
  }
};