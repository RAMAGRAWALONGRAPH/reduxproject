const express = require("express");
const router = express.Router();
const User = require("./models/user")

router.post("/save-counter", async(req, res)=>{
    console.log(req.body)
// const {counterValue } = req.body
const user = new User({name : req.body.counterValue})
const savedUser = await user.save();
console.log(savedUser)
res.json(savedUser)
})

module.exports = router;