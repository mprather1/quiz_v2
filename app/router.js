var Marionette = require('marionette');
var Controller = require("./controller");

var Router = Marionette.AppRouter.extend({
  
  initialize: function(options){
    this.controller = new Controller({ app: options.app });
  },
  
  appRoutes: {
    "": "index",
    "quizes/:id": "getSingleQuiz"
  }
  
});

module.exports = Router;