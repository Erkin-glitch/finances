const {Transaction} = require("../../../models")

module.exports = async (req, res) => {
    console.log(req.body);
    try {
        let {
            title,
            amount,
            type,
        } = req.body

        let data = await Transaction.create({
            title,
            amount,
            type,
            message,
        })
        return res.send("Successful")
    } catch(error) {
        console.log(error);
        return res.status(500).send(error)
    }
}
