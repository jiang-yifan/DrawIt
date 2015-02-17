DrawIt.Views.Favorite = Backbone.View.extend({
  tagName: 'img',
  events: {
    "click": "toggleFavorite"
  },

  initialize: function (options) {
    this.drawing = options.drawing;
    this.filledFavorite = "https://www.filepicker.io/api/file/jux9kv4SuqWkOivRgJTg";
    this.emptyFavorite = "https://www.filepicker.io/api/file/3WnOGsUBRS0APWmoKxyC";
  },

  toggleFavorite: function () {
    this.count = parseInt(this.$('.heart-count').text());
    if (this.model.id) {
      this.unFavorite();
    } else {
      this.favorite();
    }
  },

  unFavorite: function () {
    this.$el.attr("src", this.emptyFavorite);
    this.model.destroy();
    this.model = new DrawIt.Models.Favorite();
  },

  favorite: function () {
    this.$el.attr("src", this.filledFavorite);
    var data = {}
    data.favorite_drawing = {}
    data.favorite_drawing.drawing_id = this.drawing.id;

    this.model.save(data);
  },

  render: function () {

    if(this.model.id){
      this.$el.attr("src", this.filledFavorite);
    } else {
      this.$el.attr("src", this.emptyFavorite);
    }
    return this;
  }
});
