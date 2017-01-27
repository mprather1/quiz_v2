var AnswerView = require("./AnswerView");

var AnswersView = Backbone.Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: AnswerView,

});

module.exports = AnswersView;