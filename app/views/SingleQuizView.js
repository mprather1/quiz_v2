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
    if(Math.round(avg) != avg){
      avg = avg.toFixed(2);
    }
    var total = this.totalPoints + "/" + this.collection.totalPoints();
    $('.total-points').html("Total: " + total).removeClass('hidden');
    $('.average-points').html("Average: " + avg + "%").removeClass('hidden');
    $('.submit-answer').addClass('hidden');
    window.app.points.reset();
    this.totalPoints = 0;
    avg = 0;
    total = 0;
  }    
});

module.exports = SingleQuizView;