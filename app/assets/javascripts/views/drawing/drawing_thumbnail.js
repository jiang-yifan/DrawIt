DrawIt.Views.DrawingThumbnail = Backbone.CompositeView.extend({
  template: JST["drawing/drawing_thumbnail"],
  className: 'drawing-thumbnail-wrapper',
  events:{
    "mouseenter": "showOptions",
    "click .drawing-thumbnail": "showDrawing"
  },

  showOptions: function (event) {
  },

  showDrawing: function (event) {
    event.preventDefault();
    if(!this.showing){
      this.showing = true;
      this.model.fetch()
      this.modalView = new DrawIt.Views.DrawingModalShow({
        model: this.model
      });
      this.addSubview(".modal-container", this.modalView);
      this.listenTo(this.modalView, "closeModal", this.unShowDrawing);
    }
  },

  unShowDrawing: function () {
    this.removeSubview('.modal-container', this.modalView)
    this.showing = false;
  },

  render: function () {
    var content = this.template({drawing: this.model})
    this.$el.html(content);
    return this;
  }

});
