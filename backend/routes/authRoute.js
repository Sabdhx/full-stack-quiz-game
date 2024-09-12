const express = require("express");
const { allData, deleteData, signIn, signUp } = require("../components/components.js");

const router = express.Router();

router.get("/get", allData);
router.post("/signup", signUp);
router.post("/signIn", signIn);
router.post("/delete", deleteData);
// router.get("/profile", profilePage);

module.exports = router;