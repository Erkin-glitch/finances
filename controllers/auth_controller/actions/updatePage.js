const {User} = require("../../../models")

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id); 

    if (!user) {
      return res.status(404).send("User not found");
    }

    return res.render("edit__user", { user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
