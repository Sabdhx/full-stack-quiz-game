const dataSchema = require("../mongodb/scoreSchema.js")

const scoreInformation =async (req,res) =>{ 
  console.log("first")
  const { name, score} = req.body;
  console.log(name)
  console.log(score)
 
  const response = await dataSchema.create({name , score})
  res.status(200).json({response});
}


const getTheLeaderBoardData = async (req, res) => {
  try {
    const data = await dataSchema.find();
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const deleteScore=async(req,res)=>{
   console.log("first")
   const {id}=req.params;
   const response = await dataSchema.findByIdAndDelete(id)
   res.status(200).json("hello")
}

module.exports = {scoreInformation,getTheLeaderBoardData,deleteScore};