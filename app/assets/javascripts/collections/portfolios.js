DrawIt.Collections.Portfolios = Backbone.Collection.extend({
  url: function () {
    return "api/users/" + this.userId + "/portfolios"
  },

  initialize: function (models, options) {
    this.userId = options.userId
  },

  model: DrawIt.Models.Portfolio
});
