DrawIt.Views.DrawingOverlay = Backbone.CompositeView.extend({
  template: JST["drawing/drawing_overlay"],
  initialize: function () {
    this.showHearts();
    this.showFavorite();
  },

  showHearts: function () {
    var heartsView = new DrawIt.Views.Hearts({
      model: this.model.heart(),
      heartable: this.model
    });
    this.addSubview(".heart-view", heartsView);
  },

  showFavorite: function () {
    var favoriteView = new DrawIt.Views.Favorite({
      model: this.model.favorite(),
      drawing: this.model
    });
    this.addSubview(".favorite", favoriteView);
  },

  render: function () {
    var content = this.template({drawing: this.model});
    this.$el.html(content);
    return this;
  }
})
