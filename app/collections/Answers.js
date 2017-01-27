var Answer = require("../models/Answer")

var Answers = Backbone.Collection.extend({
  model: Answer,
  initialize: function(options){
    this._question = options._question
    this.url = "http://shintech.ninja:8000/api/questions/" + this._question.get('id') + '/answers'  }
});

module.exports = Answers;