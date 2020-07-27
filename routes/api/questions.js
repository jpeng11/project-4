const express = require("express");
const router = express.Router();
const questionCtrl = require("../../controllers/questions");

router.get("/random", questionCtrl.getRandomQuest);

module.exports = router;
