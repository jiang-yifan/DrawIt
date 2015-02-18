DrawIt.Views.CommentShow = Backbone.CompositeView.extend({
  template: JST["comment/comment_show"],
  className: "comment group",

  events:{
    "click .comment-avatar": "navigateProfile",
    "click .comment-username": "navigateProfile"
  },

  initialize: function () {
    this.addHeartView();
  },

  navigateProfile: function () {
    Backbone.history.navigate(
      "users/" + this.model.get('user_id'),
      {trigger: true}
    );
  },

  addHeartView: function () {
    var heartView = new DrawIt.Views.Hearts({
      model: this.model.heart(),
      heartable: this.model
    });
    this.addSubview(".comment-hearts", heartView);
  },

  render: function () {
    var content = this.template({comment: this.model});
    this.$el.html(content);
    return this;
  }

});
