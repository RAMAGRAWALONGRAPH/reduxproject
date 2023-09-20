const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ramag:rammongouser%401234@cluster0.ejydhnp.mongodb.net/project").then(()=>
  {  console.log("connection successfull")
}).catch((err)=>{
    console.log(err)
})