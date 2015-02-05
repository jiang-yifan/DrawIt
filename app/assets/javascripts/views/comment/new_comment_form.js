DrawIt.Views.NewCommentForm = Backbone.View.extend({
  template: JST["comment/new_comment"],
  tagName: "form",
  events:{
    "click .submit": "createComment"
  },

  createComment: function (event) {
    event.preventDefault();
    $delegateTarget = $(event.delegateTarget);
    var data = $delegateTarget.serializeJSON();
    data.comment.commentable_type = (
        this.collection.commentedOn.constructor.modelType
      );

    data.comment.commentable_id = this.collection.commentedOn.id;

    var newComment = new DrawIt.Models.Comment();
    var view = this;
    newComment.save(data,{
      success: function () {
        view.collection.add(newComment);
      }
    })
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});
