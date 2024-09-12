const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/authRoute.js");
const cookieParser = require("cookie-parser");
const form = require("./routes/formRoute.js")
const app = express();
const scoring = require("./routes/scoreRoute.js")  



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const mongdbData = async () =>{
  const mongodb =await mongoose.connect("mongodb+srv://shah:123@cluster0.ol5fi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}
mongdbData();

app.use(cors({
  origin: ["http://localhost:5173"],
  credentials:true,
}));

app.use("/" , router);
app.use("/form" , form);
app.use("/scores" , scoring)


app.listen(5000, () => {
  console.log("server is running on port 5000");
}); 
