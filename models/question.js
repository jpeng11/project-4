const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Question", questionSchema);
