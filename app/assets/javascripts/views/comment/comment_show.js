DrawIt.Views.CommentShow = Backbone.View.extend({
  template: JST["comment/comment_show"],
  className: "comment group",

  render: function () {
    var content = this.template({comment: this.model});
    this.$el.html(content);
    return this;
  }

});
