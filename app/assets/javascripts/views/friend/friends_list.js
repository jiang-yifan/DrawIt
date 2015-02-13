DrawIt.Views.FriendsList = Backbone.CompositeView.extend({
  template: JST["friend/friends_list"],

  initialize: function () {
    this.listenTo(this.collection, "add", this.addFriendView);
    this.listenTo(this.collection, "remove", this.removeFriendView);
    this.addFriendViews();
    $(".title").text("Friends")
  },

  addFriendViews: function () {
    this.collection.each(this.addFriendView.bind(this));
  },

  addFriendView: function (friend) {
    var friendThumbnailView = new DrawIt.Views.FriendThumbnail({
      model: friend,
      collection: this.collection
    });
    this.addSubview(".friends-list", friendThumbnailView);
  },

  removeFriendView: function (friend) {
    this.removeSubviewByModel(friend);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }

});
