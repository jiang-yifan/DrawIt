DrawIt.Views.DrawingThumbnail = Backbone.View.extend({
  template: JST["drawing/drawing_thumbnail"],
  className: 'drawing-thumbnail-wrapper',

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    var content = this.template({drawing: this.model})
    this.$el.html(content);

    return this;
  }

});
