DrawIt.Views.DrawingsNav = Backbone.View.extend({
  template: JST["drawing/drawings_nav"],
  className: "drawings-nav group",

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }

});
