var AnswerView = Backbone.Marionette.View.extend({
  tagName: 'li',
  template: require("../templates/answer-view-template.html"),
});

module.exports = AnswerView;