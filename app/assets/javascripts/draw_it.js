window.DrawIt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new DrawIt.Routers.Router({$rootEl: $('#content')});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  DrawIt.initialize();
});
