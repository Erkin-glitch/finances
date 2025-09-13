const { User } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    const updated = await User.update(
      {
        username,
      },
      {
        where: {
          id,
        },
      }
    );

    if (updated[0] === 0) {
      return res.status(404).send("Couldn't find anything to update");
    }

    const user = await User.findByPk(id); 

    req.session.user = {
      id: user.id,
      username: user.username,
    };

    res.redirect("/balance");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Mistake");
  }
};
