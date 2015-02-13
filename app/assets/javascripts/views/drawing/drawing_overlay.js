DrawIt.Views.DrawingOverlay = Backbone.CompositeView.extend({
  template: JST["drawing/drawing_overlay"],
  initialize: function () {
    this.showHearts();
  },

  showHearts: function () {
    var heartsView = new DrawIt.Views.Hearts({
      model: this.model
    });
    this.addSubview(".heart", heartsView);
  },

  render: function () {
    var content = this.template({drawing: this.model});
    this.$el.html(content);
    return this;
  }
})
