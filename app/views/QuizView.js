var QuizView = Backbone.Marionette.View.extend({
  tagName: 'li',
  template: require("../templates/quiz-view-template.html")
});

module.exports = QuizView;