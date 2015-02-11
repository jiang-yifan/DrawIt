window.DrawIt = {
  Models: {},
  Collections: {},
  Views: {},
  Modals: {},
  Routers: {},
  initialize: function() {
    var that = this;
    $.ajax({
      url: "users/get_current_user_id",
      success: function (id) {
         that.initializeRouter(id);
      }
    });
  },

  initializeRouter: function (id) {
    new DrawIt.Routers.Router({
      $rootEl: $('#content'),
      $header: $('#header'),
      $cover: $('#cover'),
      userId: id
      });
    Backbone.history.start();
  }
};
