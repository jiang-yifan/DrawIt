DrawIt.Models.Profile = Backbone.Model.extend({
  url: function () {
    return "api/users/" + this.userId + "/profile"
  },

  initialize: function (options) {
    this.userId = options.userId
  },
}, {
  modelType: "Profile"
});
