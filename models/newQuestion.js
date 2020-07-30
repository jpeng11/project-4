const mongoose = require("mongoose");

const newQuestionSchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("NewQuestion", newQuestionSchema);
