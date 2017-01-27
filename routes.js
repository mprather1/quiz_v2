var express = require("express");
var router = express.Router();
var quizzes = require("./db").quizzes;
var questions = require("./db").questions;
var answers = require("./db").answers;

router.route("/quizzes")
  .get(quizzes.getAllQuizzes)
  .post(quizzes.createQuiz)

router.route("/quizzes/:id")
  .get(quizzes.getSingleQuiz)
  .put(quizzes.updateQuiz)
  .delete(quizzes.removeQuiz)
  
router.route('/quizzes/:id/questions')
  .post(questions.createQuestion)
  .get(questions.getQuizQuestions)
  
router.route('/questions/:id/answers')
  .post(answers.createAnswer)
  .get(answers.getQuestionsAnswers)

module.exports = router;