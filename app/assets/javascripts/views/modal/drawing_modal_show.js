DrawIt.Views.DrawingModalShow = Backbone.Modal.extend({
  template: JST["modal/modal_base"],

  initialize: function () {
    var drawingContentView = new DrawIt.Views.DrawingModalContent({
      model: this.model
    });
    this.addSubview(".modal-content", drawingContentView);
    myRouter.on("route", this.deleteModal.bind(this));
  }
})
