DrawIt.Collections.Activities = Backbone.Collection.extend({
  url: function () {
    return "api/users/" + this.userId + "/activities";
  },

  initialize: function (models, options) {
    this.userId = options.userId;
  },
});
