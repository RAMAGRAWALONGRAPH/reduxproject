const express = require("express")
const cors = require("cors")
require("./db")
const counterRoutes = require("./counterRoutes")
const User = require("./models/user")
const app = express();

const PORT = 5000;
app.use(express.json())
app.use(cors())

app.use("/api", counterRoutes);







app.listen(PORT, ()=>{
    console.log("app is listen on port 5000")
})