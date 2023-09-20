const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    counterValue :{
        type: Number
    },
    name :{
        type: String
    }
})

module.exports = mongoose.model("user", UserSchema)