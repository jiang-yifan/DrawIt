DrawIt.Views.DrawingThumbnail = Backbone.CompositeView.extend({
  template: JST["drawing/drawing_thumbnail"],
  className: 'drawing-thumbnail-wrapper group',
  events:{
    "mouseenter": "showOptions",
    "mouseleave": "removeOptions",
    "click .drawing-thumbnail": "showDrawing"
    // "click .fav-button": "toggleFavorite"
  },

  showOptions: function (event) {
    this.$(".drawing-thumbnail-overlay").removeClass("hidden");
    if(!this.drawingOverlayView){
      this.drawingOverlayView = new DrawIt.Views.DrawingOverlay({
        model: this.model
      });
      this.addSubview(
        ".drawing-thumbnail-overlay",
        this.drawingOverlayView
      );
    }
  },

  removeOptions: function () {
    this.$(".drawing-thumbnail-overlay").addClass("hidden");
  },

  showDrawing: function (event) {
    event.preventDefault();
    this.model.fetch()
    this.modalView = new DrawIt.Views.DrawingModalShow({
      model: this.model
    });
    $("body").append(this.modalView.render().$el);
    this.modalView.onRender();
  },

  toggleFavorite: function () {
    if (this.model.get('is_favorite')) {

    }
  },

  render: function () {
    var content = this.template({drawing: this.model})
    this.$el.html(content);
    return this;
  }

});
