const bcrypt = require("bcryptjs");
const { User } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userExists = await User.findOne({ where: { username } });
    if (userExists) {
      return res.send("User with this username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ username, password: hashedPassword });

    req.session.user = {
      id: newUser.id,
      username: newUser.username,
    };

    console.log("Registration OK", req.session.user);

    res.redirect("/balance/");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
