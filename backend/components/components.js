const { JsonWebTokenError } = require("jsonwebtoken");
const User = require("../mongodb/authSchema.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const allData = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({
      message: "this is the data response",
      data: data,
    });
    // console.log(data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
const signUp = async (req, res) => {
  const body = req.body;
  const saltRound = 10;
  const password = body.password;
  const hashedPassword = bcrypt.hashSync(password, saltRound);
  // console.log(hashedPassword);
  const findingoptions = await User.findOne({ name: body.name });
  if (findingoptions) {
    res.status(400).json({ message: "username already exist" });
  }
  const data = await User.create({
    username: body.name,
    email: body.email,
    password: hashedPassword,
  });
  res.status(200).json(data);
};
const signIn = async (req, res) => {
  const body = req.body;
  const email = body.email;
  const password = body.password;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json("Your email or password is not correct");
    }
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json("Your email or password is not correct");
    }
    const age = 1000000;

    const token = jwt.sign(
      {
        username: user.username,
        email: user.email,
      },
      "secret",
      { expiresIn: age }
    );

    // Serialize the token to a string
    const tokenString = JSON.stringify(token);
    // Set the cookie
    res.cookie("token", tokenString, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });

    res.status(200).json("Sign in successful");
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};
const deleteData = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
  res.status(200).json("Sign out successful");
};
// const profilePage = (req, res) => {
//  const {token} = req.cookie;
//  console.log("first")
//  console.log(token)
//  res.status(200).json("response sent")
// };

module.exports = {
  allData,
  signUp,
  signIn,
  deleteData,
};
