const Question = require("../models/question");

module.exports = {
  getRandomQuest,
  getAll,
};

function getRandomQuest(req, res, next) {
  Question.aggregate([
    { $match: { category: { $in: req.query.category } } },
    { $sample: { size: parseInt(req.query.numOfQuest) } },
  ])
    .then((questions) => res.json(questions))
    .catch((err) => res.status(400).json("Error: " + err));
}

function getAll(req, res, next) {
  Question.find({ category: "general" })
    .then((questions) => res.json(questions))
    .catch((err) => res.status(400).json("Error: " + err));
}
