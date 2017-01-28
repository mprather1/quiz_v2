var Point = require("../models/Point")

var AnswerView = Backbone.Marionette.View.extend({
  tagName: 'li',
  template: require("../templates/answer-view-template.html"),
  initialize: function(){
    this.listenTo(Backbone, 'submit:answer', this.handleClick)
  },
    handleClick: function(){
    if($('[name=' + this.model.get('_question') + '-radio]:radio:checked').val() == this.model.get('id') && this.model.get('correct')){
      this.$el.css('background-color', 'lightgreen');
      var point = new Point({ point: 1})
      window.app.points.add(point)
    } else if ($('[name=' + this.model.get('_question') + '-radio]:radio:checked').val() == this.model.get('id') && !this.model.get('correct')){
      this.$el.css('background-color', 'red');  
    }
  },

});

module.exports = AnswerView;