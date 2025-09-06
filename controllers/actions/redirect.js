const { Transaction } = require("../../models");

module.exports = async (req, res) => {
  console.log("Получены данные формы:", req.body); // Добавь это

  try {
    const { title, amount, type } = req.body;

    if (!title || !amount || !type) {
      return res.status(400).send("Все поля обязательны");
    }

    await Transaction.create({ title, amount, type });

    res.redirect('/');
  } catch (error) {
    console.error("Ошибка при создании транзакции:", error);
    res.status(500).send("Ошибка сервера");
  }
};
