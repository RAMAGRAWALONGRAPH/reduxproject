const express = require("express");
const router = express.Router();
const User = require("./models/user")

router.post("/save-user", async(req, res)=>{
   
// const {counterValue } = req.body
const user = new User({user : req.body.user,
email : req.body.email})
const savedUser = await user.save();

res.json(savedUser)
})

router.get("/get-save-user", async(req, res)=>{
  
// const {counterValue } = req.body
const user = await User.find({})

res.json(user)
})

router.put("/edit-save-user", async(req, res)=>{
    
    const {user , email, id} = req.body;
    console.log(req.body)
    try{
    const users = await User.findByIdAndUpdate(id, {user, email}, {new: true})
    
    if (!users) {
        return res.status(404).json({ error: 'User not found' });
      }
      console.log(users)
      res.json(users)
    }catch(error){
        res.json({"error while editing the user details" : error})
    }
})

router.delete("/delete-save-user/:id", async(req, res)=>{
    try{
      const user = await User.findByIdAndDelete(req.params.id) 
      if (!user){
          return res.json("user was not found")
      }
      res.json(user)
  }catch(error){
      res.json("error while deleting", error)
  }
     })

module.exports = router;