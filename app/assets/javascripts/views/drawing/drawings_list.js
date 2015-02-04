DrawIt.Views.DrawingsList = Backbone.CompositeView.extend({
  template: JST["drawing/drawing_list"],

  initialize: function () {
    this.listenTo(this.collection, "add", this.addDrawing);
    this.listenTo(this.collection, "sync", this.addDrawings)
    this.addDrawings();
  },

  addDrawings: function () {
    this.removeSubviews();
    this.collection.each(this.addDrawing.bind(this));
  },

  addDrawing: function (drawing) {
    var drawingThumbnailView = new DrawIt.Views.DrawingThumbnail({
      model: drawing
    });

    this.addSubview(".drawings-list", drawingThumbnailView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    
    return this;
  }

});
