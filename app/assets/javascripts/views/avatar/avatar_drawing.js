DrawIt.Views.AvatarDrawing = Backbone.View.extend({
  template: JST['avatar/avatar_drawing'],
  className: "avatar-wrapper-drawing group",
  events:{
    "click .avatar-drawing-left": "navigateProfile",
    "click .avatar-drawing-right": "navigateProfile"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  navigateProfile: function () {
    Backbone.history.navigate(
      "users/" + this.model.get('user_id'),
      {trigger: true}
    );
  },

  render: function () {
    var content = this.template({profile: this.model});
    this.$el.html(content);
    return this;
  }
})
