const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  email:{
    type:String,
    require:true,
    unique:true,
    },
    password:{
      type:String,
      required:true
      },

})

const User = mongoose.model("Schema", userSchema);
module.exports = User;
