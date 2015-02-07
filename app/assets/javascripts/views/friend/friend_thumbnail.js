DrawIt.Views.FriendThumbnail = Backbone.CompositeView.extend({
  template: JST["friend/friend_thumbnail"],
  className: "friend-thumbnail-wrapper",
  events:{
    "click .avatar, .friend-name": "navigateProfile"
  },

  navigateProfile: function () {
    Backbone.history.navigate(
      "#users/" + this.model.id,
      {trigger: true}
    );
  },

  render: function () {
    var content = this.template({friend: this.model});
    this.$el.html(content);

    return this;
  }

});
