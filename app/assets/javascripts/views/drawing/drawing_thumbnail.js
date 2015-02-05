DrawIt.Views.DrawingThumbnail = Backbone.CompositeView.extend({
  template: JST["drawing/drawing_thumbnail"],
  className: 'drawing-thumbnail-wrapper',
  events:{
    "mouseenter": "showOptions",
    "click": "showDrawing"//fix it triggering when clicking on overlay
  },

  showOptions: function (event) {
    console.log("hi");
  },

  showDrawing: function (event) {
    event.preventDefault();
    if(!this.showing){
      this.showing = true;
      this.model.fetch({
        success: function () {
          console.log("fetched");
        }
      });
      var modalView = new DrawIt.Views.DrawingModalShow({
        model: this.model
      });
      // this.modal = new Modal(this.$(".modal-container"));
      // this.modal.$overlay.on("click", this.unShowDrawing.bind(this));
      // this.drawingShowView = new DrawIt.Views.DrawingModalShow({
      //   model: this.model
      // });
      //
      // var modalContent = this.drawingShowView.render().$el;
      this.addSubview(".modal-container", modalView)
      this.listenTo(modalView, "closeModal", this.unShowDrawing);
    }
  },

  unShowDrawing: function () {
    this.showing = false;
  },

  render: function () {
    var content = this.template({drawing: this.model})
    this.$el.html(content);
    return this;
  }

});
