var Marionette = require('marionette');
var RouterView = require("./views/RouterView");
var Quiz = require("./models/Quiz")
var Quizzes = require("./collections/Quizzes");
var QuizzesView = require("./views/QuizzesView");
var SingleQuizView = require("./views/SingleQuizView")
var style = require("./public/css/style.scss");

var Controller = Marionette.Object.extend({
  
  initialize: function(options){
    
    window.app = options.app;
    
    this.quizzes = new Quizzes();
  },
  
  index: function(){
    window.app.view.showChildView('main', new QuizzesView({ collection: this.quizzes }))    
  },
  
  getSingleQuiz: function(options){
    var quiz = new Quiz({ id: options })
    quiz.fetch({
      success: function(data){
        console.log("Successfully fetched /quizzes/" + data.id)
      }
    }).then(function(){
      window.singlequizView = new SingleQuizView({ model: quiz })
      window.app.view.showChildView('main', window.singlequizView)
    })
  }
  
});

module.exports = Controller;
