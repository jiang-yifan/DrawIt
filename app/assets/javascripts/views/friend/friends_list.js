DrawIt.Views.FriendsList = Backbone.CompositeView.extend({
  template: JST["friend/friends_list"],

  initialize: function () {
    this.listenTo(this.collection, "add", this.addFriend);
    this.addFriends();// bug adding initializing user to collection triggers add
    $(".title").text("Your Friends")
  },

  addFriends: function () {
    this.collection.each(this.addFriend.bind(this));
  },

  addFriend: function (friend) {
    var friendThumbnailView = new DrawIt.Views.FriendThumbnail({
      model: friend
    });
    this.addSubview(".friends-list", friendThumbnailView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }

});
