DrawIt.Views.Avatar = Backbone.View.extend({
  template: JST['avatar/avatar'],
  className: "avatar-wrapper group",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({profile: this.model});
    this.$el.html(content);
    return this;
  }
})
