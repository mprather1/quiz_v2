var Questions = require("../collections/Questions");
var QuestionsView = require("./QuestionsView");

var SingleQuizView = Backbone.Marionette.View.extend({
  tagName: 'p',
  template: require("../templates/singlequiz-view-template.html"),
  initialize: function(){
    this.totalPoints = 0;
    this.collection = new Questions({ _quiz: this.model });
    this.collection.on('sync', function(){
      window.singlequizView.showChildView('questions', new QuestionsView({ collection: this })) ;  
    });
  },
  events: {
    'click .submit-answer': 'handleClick'
  },
  regions: {
    questions: {
      el: '.questions-view',
      replaceElement: true
    }
  },
  onRender: function(){
    var questions = this.collection;
    questions.fetch({
      success: function(data){
        console.log("Successfully fetched " + data.length + " models at /quizzes/" + data._quiz.get('id') + '/questions');
      }
    });     

  },
  handleClick: function(){
    Backbone.trigger('submit:answer');
    window.app.points.forEach(function(data){
      this.totalPoints += data.get('point');
    }, this);
    var avg = (this.totalPoints / this.collection.totalPoints()) * 100;
    var total = this.totalPoints + "/" + this.collection.totalPoints();
    $('.total-points').append(total).removeClass('hidden');
    $('.average-points').append(avg + "%").removeClass('hidden');
  }    

});

module.exports = SingleQuizView;