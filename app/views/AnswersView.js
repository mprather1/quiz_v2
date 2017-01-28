var AnswerView = require("./AnswerView");

var AnswersView = Backbone.Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: AnswerView,
  initialize: function(options){
    this.points = options.points;
  },  
  childViewOptions: function(){
    var point = this.points;
    return {
      points: point
    };
  }
});

module.exports = AnswersView;