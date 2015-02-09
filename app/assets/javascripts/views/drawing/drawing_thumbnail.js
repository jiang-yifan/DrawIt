DrawIt.Views.DrawingThumbnail = Backbone.CompositeView.extend({
  template: JST["drawing/drawing_thumbnail"],
  className: 'drawing-thumbnail-wrapper',
  events:{
    "mouseenter .drawing-thumbnail": "showOptions",
    "mouseleave .drawing-thumbnail": "removeOptions",
    "click .drawing-thumbnail": "showDrawing"
  },
  initialize: function () {
  },

  showOptions: function (event) {
    this.drawingOverlayView = new DrawIt.Views.DrawingOverlay({
      model: this.model
    });
    this.addSubview(
      ".drawing-thumbnail-overlay",
      this.drawingOverlayView
    );
  },

  removeOptions: function () {
    this.removeSubview(
      ".drawing-thumbnail-overlay",
      this.drawingOverlayView
    );
  },

  showDrawing: function (event) {
    event.preventDefault();
    this.model.fetch()
    this.modalView = new DrawIt.Views.DrawingModalShow({
      model: this.model
    });
    this.addSubview(".modal-container", this.modalView);
    this.listenTo(this.modalView, "closeModal", this.unShowDrawing);
  },

  unShowDrawing: function () {
    this.removeSubview('.modal-container', this.modalView)
  },

  render: function () {
    var content = this.template({drawing: this.model})
    this.$el.html(content);
    return this;
  }

});
