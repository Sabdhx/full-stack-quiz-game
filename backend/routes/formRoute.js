const express = require("express")
const { createForm, allData, deleteData } = require("../components/form.js")
const router = express.Router()

router.post("/newForm" , createForm);
router.get("/allData" ,allData );
router.delete('/deleteData/:id', deleteData);

module.exports = router;