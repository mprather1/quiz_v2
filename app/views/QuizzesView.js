var QuizView = require("./QuizView");

var QuizzesView = Backbone.Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: QuizView,
  initialize: function(){
    this.collection.fetch({
      success: function(request, response){
        console.log("Successfully fetched quizzes...");
      },
      error: function(err){
        console.log("Error: " + err);
      }
    });    
  }
});

module.exports = QuizzesView;
