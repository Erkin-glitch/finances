const { User } = require("../../../models");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });

  if (!user) {
    return res.send("Пользователь не найден");
  }

  const isCorrect = await bcrypt.compare(password, user.password);
  if (!isCorrect) {
    return res.send("Неверный пароль");
  }

  req.session.user = {
    id: user.id,
    username: user.username,
  };

  console.log("Login OK", req.session.user);

  res.redirect("/balance");
};
