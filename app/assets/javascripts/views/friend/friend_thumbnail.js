DrawIt.Views.FriendThumbnail = Backbone.CompositeView.extend({
  template: JST["friend/friend_thumbnail"],
  className: "friend-thumbnail-wrapper",
  events:{
    "click .avatar-friend, .friend-name": "navigateProfile",
    "click .remove-friend": "removeFriend"
  },

  navigateProfile: function () {
    Backbone.history.navigate(
      "#users/" + this.model.id,
      {trigger: true}
    );
  },

  removeFriend: function (event) {
    $(event.currentTarget).prop("disabled", true);
    var data = {};
    data.friend_id = this.model.id;
    var view = this;
    $.ajax({
      url: "api/user_friends/" + this.model.id,
      method: "delete",
      data: data,
      success: function () {
        view.collection.remove(view.model);
      }
    });
  },

  render: function () {
    var content = this.template({friend: this.model});
    this.$el.html(content);

    return this;
  }

});
