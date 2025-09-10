const bcrypt = require("bcryptjs")
const { User } = require("../../../models")

module.exports = async (req,res) => {
    try{
       const { username, password } = req.body;

  const userExists = await User.findOne({ where: { username } });
  if (userExists) {
    return res.send("User with this username already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ username, password: hashedPassword });

  res.redirect("/balance");
}
     catch (error){
       console.log(error);
        return res.status(500).send(error)
    }
}
