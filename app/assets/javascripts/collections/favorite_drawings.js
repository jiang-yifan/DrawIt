DrawIt.Collections.FavoriteDrawings = Backbone.Collection.extend({
  url: function () {
    return "api/users/" + this.userId + "/favorite_drawings"
  },

  initialize: function (models, options) {
    this.userId = options.userId
  },

  model: DrawIt.Models.Drawing
});
