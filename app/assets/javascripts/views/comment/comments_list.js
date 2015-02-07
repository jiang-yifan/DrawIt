DrawIt.Views.CommentsList = Backbone.CompositeView.extend({
  template: JST["comment/comments_list"],
  className: "comment-list",

  initialize: function () {
    this.listenTo(this.collection, "add", this.addComment);
    this.showNewCommentForm();
    this.addComments();
  },

  showNewCommentForm: function () {
    var newCommentFormView = new DrawIt.Views.NewCommentForm({
      collection: this.collection
    });
    this.addSubview(".new-comment-form", newCommentFormView);
  },

  addComments: function () {
    this.collection.each(this.addComment.bind(this))
  },

  addComment: function (comment) {
    var commentShowView = new DrawIt.Views.CommentShow({
      model: comment
    });
    this.addSubview(".comments", commentShowView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }

})
