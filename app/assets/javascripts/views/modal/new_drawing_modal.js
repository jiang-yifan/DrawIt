DrawIt.Views.NewDrawingModal = Backbone.Modal.extend({
  template: JST["modal/modal_base"],

  initialize: function (options) {
    var drawingContentView = new DrawIt.Views.NewDrawingModalContent({
      userId: options.userId,
      collection: options.drawings
    });
    this.listenTo(drawingContentView, "finishedUpload", this.deleteModal);
    this.addSubview(".modal-content", drawingContentView, false);
  }
})
