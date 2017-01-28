var Question = require("../models/Question");

var Questions = Backbone.Collection.extend({
  model: Question,
  initialize: function(options){
    this._quiz = options._quiz;
    this.url = "http://shintech.ninja:8000/api/quizzes/" + this._quiz.get('id') + '/questions';
  },
  totalPoints: function(){
    this.totalPossiblePoints = 0;    
    var that = this;
    this.forEach(function(data){
      that.totalPossiblePoints += data.get('points');
    });
    return that.totalPossiblePoints;
  }
});

module.exports = Questions;