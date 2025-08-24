const {User} = require("../../models")

module.exports = async (req, res) => {
    console.log (req.body)
    try{
     let {
        amount,
        description,
        isProfit
     }  = req.body

        if (!amount || !description ) {
            res.status(400).send()
            return
        }

        let data = await User.create({
            amount,
            description
        })
        return res.send("succesful")
    } catch (error){
        console.log(error);
        return res.status(500).send(error)
    }
}