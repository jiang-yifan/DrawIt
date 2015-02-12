DrawIt.Views.ProfileCover = Backbone.View.extend({
  template: JST["header/profile_cover"],
  events: {
    "click .add-friend": "addFriend",
    "click .remove-friend": "removeFriend"
  },

  addFriend: function () {
    var data = {};
    $(event.currentTarget).prop("disabled", "true")
    data.friend_id = this.model.userId;
    var friend = new DrawIt.Models.Friend(data);
    friend.save([],{
      success: function () {
        $(".add-friend").text("Request Sent!");
        $('.add-friend').removeClass("add-friend");
      }
    });
  },

  removeFriend: function () {

  },

  render: function () {
    var content = this.template({profile: this.model});
    this.$el.html(content);

    return this;
  }

});
