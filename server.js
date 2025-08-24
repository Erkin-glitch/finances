const express = require("express")
const port = 3000;
let app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))
app.get("/", (req, res) =>{
    res.render("index")
})


app.listen(port,()=> {
    console.log("Server is running in this port "+ port);
})
