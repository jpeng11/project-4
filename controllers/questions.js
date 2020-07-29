const Question = require("../models/question");
const querystring = require("querystring");

module.exports = {
  getRandomQuest,
};

function getRandomQuest(req, res, next) {
  Question.aggregate([
    { $match: { category: { $in: req.query.category } } },
    { $sample: { size: 5 } },
  ])
    .then((questions) => res.json(questions))
    .catch((err) => res.status(400).json("Error: " + err));
}
