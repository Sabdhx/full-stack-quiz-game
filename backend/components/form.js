const form = require("../mongodb/formSchema.js");

const createForm = async (req, res) => {
  const body = req.body;
  const data = await form.create({
    question: body.question,
    options:body.options,
    answer: body.answer,
  })
  console.log(data);
  res.status(200).json("this is the response bro");
};

const allData =async (req, res) => {
  const data = await form.find()
  console.log(data)
  res.status(200).json({data});
};

const deleteData = async (req, res) => {
  const { id } = req.params; 
  console.log(id); 
  const response = await form.findByIdAndDelete(id);
  res.status(200).json(response);
};

module.exports = { createForm, allData, deleteData };
