// controllers/index.js
const {Transaction} = require ("../../models")
module.exports = async (req, res) => {
  try {
    const transactions = await Transaction.findAll(); 
    console.log('Транзакции из базы:', transactions);
    res.render('index', { transactions });  
  } catch (e) {
    res.status(500).send('Ошибка при получении данных');
  }
};

