DrawIt.Views.ProfileCover = Backbone.View.extend({
  template: JST["header/profile_cover"],
  events: {
    "click .add-friend": "addFriend",
    "click .remove-friend": "removeFriend",
    "click .profile-avatar": "editAvatar",
    "click .cover-image": "editCover"
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render.bind(this))
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

  editAvatar: function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.model.get('is_user')) {
      filepicker.pick({
        container: 'modal',
        services: ['COMPUTER']
      }, this.uploadAvatar.bind(this));
    }
  },

  editCover: function () {
    if (this.model.get('is_user')) {
      filepicker.pick({
        container: 'modal',
        services: ['COMPUTER']
      }, this.uploadCover.bind(this));
    }
  },

  uploadAvatar: function (file) {
    this.model.set("avatar_url", file.url);
    this.model.save();
  },

  uploadCover: function (file) {
    this.model.set("cover_url", file.url);
    this.model.save();
  },

  removeFriend: function () {

  },

  render: function () {
    var content = this.template({profile: this.model});
    this.$el.html(content);
    return this;
  }

});
