DrawIt.Views.DrawingModalContent = Backbone.CompositeView.extend({
  template: JST["drawing/drawing_modal_content"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.addComentsView);
    this.addAvatarView();
    this.addCommentsView();
    this.addTagsView();
  },

  addAvatarView: function () {
    var drawingAvatarView = new DrawIt.Views.AvatarDrawing({
      model: this.model.avatar()
    });
    this.addSubview(".drawing-avatar", drawingAvatarView);
  },

  addCommentsView: function () {
    var commentsListView = new DrawIt.Views.CommentsList({
      collection: this.model.comments()
    });
    this.addSubview(".drawing-show-bottom", commentsListView);
  },

  addTagsView: function () {
    var tagsListView = new DrawIt.Views.TagsList({
      collection: this.model.tags()
    });
    this.addSubview(".tags", tagsListView);
  },

  render: function () {
    var content = this.template({ drawing: this.model });
    this.$el.html(content);
    return this;
  }
});
