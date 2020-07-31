const express = require("express");
const router = express.Router();
const questionCtrl = require("../../controllers/questions");

router.get("/random", questionCtrl.getRandomQuest);
router.get("/showList", questionCtrl.getAll);
router.post("/submitNew", questionCtrl.submitNewQuest);
router.get("/viewPending", questionCtrl.viewPending);
router.post("/movePendingToLive", questionCtrl.movePending);

module.exports = router;
