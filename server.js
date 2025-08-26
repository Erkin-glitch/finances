const express = require("express");
const indexRouter = require("./router/index.js");
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");
const { User } = require('./models');

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.render('index', { users });
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    res.status(500).send('Ошибка сервера');
  }
});

app.use("/", indexRouter);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
