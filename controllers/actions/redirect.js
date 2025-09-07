const { Transaction } = require("../../models");

module.exports = async (req, res) => {
  console.log(req.body); 

  try {
    const { title, amount, type } = req.body;

    if (!title || !amount || !type) {
      return res.status(400).send();
    }

    await Transaction.create({ title, amount, type });

    res.redirect('/');
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Ошибка сервера");
  }
};
