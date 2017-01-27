var Questions = require("../collections/Questions");
var QuestionsView = require("./QuestionsView");

var SingleQuizView = Backbone.Marionette.View.extend({
  tagName: 'p',
  template: require("../templates/singlequiz-view-template.html"),
  initialize: function(){
    this.collection = new Questions({ _quiz: this.model })
  },
  regions: {
    questions: {
      el: '.questions-view',
      replaceElement: true
    }
  },
  onRender: function(){
    var questions = this.collection
    questions.fetch({
      success: function(data){
        console.log("Successfully fetched " + data.length + " models at /quizzes/" + data._quiz.get('id') + '/questions')
      }
    }).then(function(){
      var questionsView = new QuestionsView({ collection: questions })    
      window.singlequizView.showChildView('questions', questionsView)      
    })      

  },

});

module.exports = SingleQuizView;