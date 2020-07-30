const Question = require("../models/question");
const NewQuestion = require("../models/newQuestion");

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
    .then(res.json())
    .catch((err) => res.status(400).json("Error: " + err));
}

async function submitNewQuest(req, res, next) {
  await NewQuestion.create({
    question: req.body.question,
    answer: req.body.answer,
    category: req.body.category,
  })
    .then(res.status(200).json())
    .catch((err) => res.status(400).json("Error: " + err));
}
