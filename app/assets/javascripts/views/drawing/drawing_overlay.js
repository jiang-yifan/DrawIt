DrawIt.Views.DrawingOverlay = Backbone.View.extend({
  template: JST["drawing/drawing_overlay"],

  render: function () {
    var content = this.template({drawing: this.model});
    this.$el.html(content);
    return this;
  }
})
