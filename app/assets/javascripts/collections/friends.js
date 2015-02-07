DrawIt.Collections.Friends = Backbone.Collection.extend({
  url: function () {
    return "api/users/" + this.userId + "/user_friends"
  },

  initialize: function (models, options) {
    this.userId = options.userId
  },

  model: DrawIt.Models.Friend
});
