const express = require("express");
const indexRouter = require("./router/index.js");
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");
const {Transaction} = require('./models');
const balanceRouter = require("./router/balance.js")

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));




app.use("/", indexRouter);
app.use("/", balanceRouter)

app.listen(port, () => {
  console.log("Server is running on port " + port);
});