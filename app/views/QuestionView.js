var Answers = require("../collections/Answers");
var AnswersView = require("./AnswersView");
var Point = require("../models/Point")

var QuestionView = Backbone.Marionette.View.extend({
  tagName: 'li',
  template: require("../templates/question-view-template.html"),
  initialize: function(options){
    this.answers = new Answers({ _question: this.model })
    var that = this
    this.answers.on('sync', function(){
      that.showChildView('answers', new AnswersView({ collection: this }))
    });
    this.listenTo(Backbone, 'submit:answer', this.totalPoints)
    this.listenTo(Backbone, 'correct:answer', this.correctAnswer)
  },
  regions: {
    answers: {
      el: '.answers-view',
      replaceElement: true
    }
  },
  onRender: function(){
    this.answers.fetch({
      success: function(data){
        console.log("Successfully fetched " + data.length + " models at /questions/" + data._question.get('id') + '/answers')
      }
    })   
  },
  correctAnswer: function(){
    console.log(this.model.get('points'))
    if (this.model.get('correct')){
      var point = new Point({ point: this.model.get('points')})
      window.app.points.add(point)    
    }

  }
});

module.exports = QuestionView;