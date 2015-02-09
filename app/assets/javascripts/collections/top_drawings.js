DrawIt.Collections.TopDrawings = Backbone.Collection.extend({
  url: "api/top_drawings",
  model: DrawIt.Models.Drawing
});
