const Question = require("../models/question");

module.exports = {
  getRandomQuest,
  getAll,
  submitNewQuest,
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
  Question.find({})
    .then((questions) => res.json(questions))
    .catch((err) => res.status(400).json("Error: " + err));
}

function submitNewQuest(req, res, next) {
  Question.create({
    question: req.body.question,
    answer: req.body.answer,
    category: req.body.category,
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .catch((err) => res.status(400).json("Error: " + err));
}
