const mongoose = require("mongoose");

const dataScore = new mongoose.Schema({
score:{
  type:Number,
  required:true  
},
name:{
  type:String,
  required:true
}

});

const Scoring = mongoose.model("score", dataScore);
module.exports = Scoring;
