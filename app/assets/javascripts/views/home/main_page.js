DrawIt.Views.MainPage = Backbone.CompositeView.extend({
  template: JST["home/main_page"],
  className: "group",
  initialize: function () {
    this.addFeedView();
    this.addAvatar();
  },

  addAvatar: function () {
    var avatarView = new DrawIt.Views.Avatar({
      model: this.model
    });
    this.addSubview(".avatar-area", avatarView);
  },

  addFeedView: function () {
    var feedView = new DrawIt.Views.Feed();
    this.addSubview(".feed", feedView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }


});
