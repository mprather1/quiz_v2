var QuestionView = require("./QuestionView");

var QuestionsView = Backbone.Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: QuestionView,
});

module.exports = QuestionsView;