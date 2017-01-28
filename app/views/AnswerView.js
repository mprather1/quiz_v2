var Point = require("../models/Point");

var AnswerView = Backbone.Marionette.View.extend({
  tagName: 'li',
  template: require("../templates/answer-view-template.html"),
  initialize: function(options){
    this.points = options.points;
    this.listenTo(Backbone, 'submit:answer', this.handleClick);
  },
  handleClick: function(){
    
    var radio = $('[name=' + this.model.get('_question') + '-radio]:radio:checked').val();
    var question = $('.' + this.model.get('_question') + '-answer-view');
    
    if(radio == this.model.get('id') && this.model.get('correct')){
      this.$el.css('background-color', 'lightgreen');
      var point = new Point({ point: this.points});
      window.app.points.add(point);
    } else if (radio == this.model.get('id') && !this.model.get('correct')){
      this.$el.css('background-color', 'red');  
    } else if (radio === undefined) { 
      question.css('background-color', 'red');
    }
    
  },

});

module.exports = AnswerView;