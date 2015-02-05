DrawIt.Views.FriendThumbnail = Backbone.View.extend({
  template: JST["friend/friend_thumbnail"],
  className: "friend-thumbnail-wrapper",
  events:{

  },

  render: function () {
    var content = this.template({friend: this.model});
    this.$el.html(content);

    return this;
  }

});
