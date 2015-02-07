DrawIt.Views.ProfileCover = Backbone.View.extend({
  template: JST["header/profile_cover"],

  render: function () {
    var content = this.template({profile: this.model});
    this.$el.html(content);

    return this;
  }

});
