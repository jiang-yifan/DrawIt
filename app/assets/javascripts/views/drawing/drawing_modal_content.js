DrawIt.Views.DrawingModalContent = Backbone.CompositeView.extend({
  template: JST["drawing/drawing_modal_content"],

  initialize: function () {

    this.listenTo(this.model, "sync", this.addComentsView);
    this.addCommentsView();

    // this.render();
  },

  addCommentsView: function () {
    var commentsListView = new DrawIt.Views.CommentsList({
      collection: this.model.comments()
    });
    this.addSubview(".drawing-show-bottom", commentsListView);
  },

  // showNewCommentForm: function () {
  //   var newCommentFormView = new DrawIt.Views.NewCommentForm({
  //     drawing: this.model,
  //     collection: this.model.comments()
  //   });
  //   this.addSubview(".new-comment-form", newCommentFormView);
  // },
  //
  // addComments: function () {
  //   this.model.comments().each(this.addComment,this)
  // },
  //
  // addComment: function (comment) {
  //   var commentShowView = new DrawIt.Views.CommentShow({
  //     model: comment
  //   });
  //   this.addSubview(".comments", commentShowView);
  // },

  render: function () {
    var content = this.template({ drawing: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
