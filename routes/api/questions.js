const express = require("express");
const router = express.Router();
const questionCtrl = require("../../controllers/questions");

router.get("/random?:category", questionCtrl.getRandomQuest);

module.exports = router;
