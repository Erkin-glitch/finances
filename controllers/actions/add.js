const {User} = require("../../models")

module.exports = async (req, res) => {
    // console.log (req.body)
    try{
     let {
        title,
        amount,
        type
     }  = req.body

        let data = await User.create({
            title,
            amount,
            type
        })
        return res.redirect("/admin")
    } catch (error){
        console.log(error);
        return res.status(500).send(error)
    }
}