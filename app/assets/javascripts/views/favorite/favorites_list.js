DrawIt.Views.FavoritesList = Backbone.CompositeView.extend({
  template: JST["favorite/favorites_list"],

  initialize: function () {
    this.listenTo(this.collection, "add", this.addDrawing);
    this.addDrawings();
    $(".title").text("Favorites")
  },

  addDrawings: function () {
    this.collection.each(this.addDrawing.bind(this));
  },

  addDrawing: function (drawing) {
    var drawingThumbnailView = new DrawIt.Views.DrawingThumbnail({
      model: drawing
    });

    this.addSubview(".favorite-list", drawingThumbnailView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }

});
