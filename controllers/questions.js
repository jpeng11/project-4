const Question = require("../models/question");
const NewQuestion = require("../models/newQuestion");

module.exports = {
  getRandomQuest,
  getAll,
  submitNewQuest,
  viewPending,
  movePending,
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

async function submitNewQuest(req, res, next) {
  await Question.create({
    question: req.body.question,
    answer: req.body.answer,
    category: req.body.category,
  })
    .then(res.status(200).json())
    .catch((err) => res.status(400).json("Error: " + err));
}

function viewPending(req, res) {
  NewQuestion.find({})
    .then((questions) => res.json(questions))
    .catch((err) => res.status(400).json("Error: " + err));
}

async function movePending(req, res) {
  console.log(req.body);
  await Question.create({
    question: req.body.question,
    answer: req.body.answer,
    category: req.body.category,
  })
    .then(res.status(200).json())
    .catch((err) => res.status(400).json("Error: " + err));

  NewQuestion.findByIdAndRemove(req.body.id, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
  });
}
