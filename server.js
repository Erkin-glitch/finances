const express = require("express");
const indexRouter = require("./router/index.js");
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");
const { Transaction } = require('./models');
const balanceRouter = require("./router/balance.js");
const authRouter = require("./router/auth.js");
const session = require("express-session");
const authMiddleware = require("./middleware/auth");
const bcrypt = require("bcryptjs");

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Настройка сессий
app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false, // ← поставь false
  })
);

console.log("indexRouter:", typeof indexRouter);
console.log("authRouter:", typeof authRouter);
console.log("balanceRouter:", typeof balanceRouter);
console.log("authMiddleware:", typeof authMiddleware);


app.use("/", indexRouter);
app.use("/", authRouter);  
app.use("/balance", authMiddleware, balanceRouter);


app.get("/test-session", (req, res) => {
  console.log("Session user:", req.session.user);
  res.send(req.session.user ? `Logged in as ${req.session.user.username}` : "Not logged in");
});


app.listen(port, () => {
  console.log("Server is running on port " + port);
});
