const {Transactions} = require("../../models")

module.exports = async (req, res) => {
    console.log (req.body)
    try{
     let {
        title,
        amount,
        type
     }  = req.body

        let data = await Transactions.create({
            title,
            amount,
            type
        })
        return res.redirect("/")
    } catch (error){
        console.log(error);
        return res.status(500).send(error)
    }
}