var Point = require("../models/Point");

var Points = Backbone.Collection.extend({
  model: Point
});

module.exports = Points;