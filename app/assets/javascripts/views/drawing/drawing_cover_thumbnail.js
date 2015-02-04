DrawIt.Views.DrawingCoverThumbnail = Backbone.View.extend({
  template: JST["drawing/drawing_cover_thumbnail"],
  className: 'drawing-cover-thumbnail-wrapper',

  render: function () {
    var content = this.template({drawing: this.model})
    this.$el.html(content);

    return this;
  }

});
