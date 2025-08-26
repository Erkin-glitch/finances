const {User} = require("../../models")

module.exports = async (req, res) => {
    console.log (req.body)
    try{
     let {
        title,
        amount,
        type
     }  = req.body

        if (!title || !amount || !type ) {
            res.status(400).send()
            return
        }

        let data = await User.create({
            title,
            amount,
            type
        })
        return res.send("succesful")
    } catch (error){
        console.log(error);
        return res.status(500).send(error)
    }
}