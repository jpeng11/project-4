const Question = require("../models/question");

module.exports = {
  getRandomQuest,
};

function getRandomQuest(req, res, next) {
  Question.aggregate([
    { $match: { category: req.query.category } },
    { $sample: { size: 5 } },
  ])
    .then((questions) => res.json(questions))
    .catch((err) => res.status(400).json("Error: " + err));
}
