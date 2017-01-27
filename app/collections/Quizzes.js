var Quiz = require("../models/Quiz");

var Quizzes = Backbone.Collection.extend({
  url: 'http://shintech.ninja:8000/api/quizzes',
  model: Quiz
});

module.exports = Quizzes;