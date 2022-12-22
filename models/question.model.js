const { default: mongoose } = require("mongoose");

const quesSchema = mongoose.Schema({
    category: String,
    type: String,
    difficulty: String,
    question: String,
    correct_answer: String,
    incorrect_answers:Array(String)
})
const Ques = mongoose.model("quizquestion",quesSchema)

module.exports = {Ques};