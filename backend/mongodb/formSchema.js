const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const form = mongoose.model("data", dataSchema);
module.exports = form;
