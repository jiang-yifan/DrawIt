DrawIt.Collections.FavoriteDrawings = Backbone.Collection.extend({
  url: "api/favorite_drawings",
  model: DrawIt.Models.Drawing
});
