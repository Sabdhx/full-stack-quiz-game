const express = require("express");

const {
  scoreInformation,
  getTheLeaderBoardData,
  deleteScore,
} = require("../components/score");
const router = express.Router();
router.post("/score", scoreInformation);
router.get("/getTheLeaderBoardData", getTheLeaderBoardData);
router.delete("/delete/:id",deleteScore);

module.exports = router;
