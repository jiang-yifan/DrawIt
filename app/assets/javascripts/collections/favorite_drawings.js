DrawIt.Collections.FavoriteDrawings = Backbone.Collection.extend({
  url: "api/favorite_drawings",

  initialize: function (models, options) {
    this.userId = options.userId
  },

  model: DrawIt.Models.Drawing,
});
