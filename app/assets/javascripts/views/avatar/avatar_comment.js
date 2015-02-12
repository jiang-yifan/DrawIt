DrawIt.Views.AvatarComment = Backbone.View.extend({
  template: JST['avatar/avatar_comment'],
  className: "avatar-wrapper group",
  events:{
    "click .avatar-comment-left": "navigateProfile",
    "click .avatar-comment-right": "navigateProfile"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  navigateProfile: function () {
    Backbone.history.navigate(
      "users/" + this.model.userId,
      {trigger: true}
    );
  },

  render: function () {
    var content = this.template({profile: this.model});
    this.$el.html(content);
    return this;
  }
})
