const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
 user :{
        type: String
    },
    email :{
        type: String
    }
})

module.exports = mongoose.model("user", UserSchema)
