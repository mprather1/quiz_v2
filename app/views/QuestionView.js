var Answers = require("../collections/Answers");
var AnswersView = require("./AnswersView");

var QuestionView = Backbone.Marionette.View.extend({
  tagName: 'li',
  template: require("../templates/question-view-template.html"),
  initialize: function(options){
    this.answers = new Answers({ _question: this.model })
    var that = this
    this.answers.on('sync', function(){
      that.showChildView('answers', new AnswersView({ collection: this }))
    })    
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
  }
});

module.exports = QuestionView;