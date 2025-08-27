const express = require("express");
const indexRouter = require("./router/index.js");
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");
const {Transaction} = require('./models');

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
console.log(transactions);

    res.render('index', {
      transactions, // <-- Передаём их в шаблон
    });
  } catch (err) {
    console.error('Ошибка при получении транзакций:', err);
    res.status(500).send('Ошибка сервера');
  }
});

app.post('/redirect', (req, res) => {
  res.redirect('/');
});


app.use("/", indexRouter);


app.listen(port, () => {
  console.log("Server is running on port " + port);
});