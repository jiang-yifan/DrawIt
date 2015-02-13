DrawIt.Views.ActivityShow = Backbone.CompositeView.extend({
  template: JST['activity/activity_show'],
  className: 'activity-wrapper group',
  initialize: function () {
    this.parseModel();
    this.listenTo(this.activity, "sync", this.synced);
  },

  parseModel: function () {
    this.type = this.model.get('activity_type');
    var id = this.model.get('activity_id');
    this.activity = new DrawIt.Models[this.type]({
      id: id
    })
    this.activity.fetch();
  },

  synced: function () {
    if(Object.keys(this.subviews()).length === 0){
      this.addCommentsView();
      this.addImage();
    }
  },

  addImage: function () {
    var view = this;
    switch(view.type){
      case "Drawing":
        view.addDrawing();
        break;
      case "Portfolio":
        view.addPortfolio();
        break;
    }
  },

  addCommentsView: function () {
    var commentsListView = new DrawIt.Views.CommentsList({
      collection: this.activity.comments()
    });
    this.addSubview(".activity-comment-wrapper", commentsListView);
  },

  addDrawing: function () {
    var drawingThumbnailView = new DrawIt.Views.DrawingThumbnail({
      model: this.activity
    });
    this.addSubview(".activity-image-wrapper", drawingThumbnailView);
  },

  addPortfolio: function () {
    var portfolioThumbnailView = new DrawIt.Views.PortfolioThumbnail({
      model: this.activity
    });
    this.addSubview(".activity-image-wrapper", portfolioThumbnailView);
  },

  render: function () {
    var content = this.template({activity: this.model});
    this.$el.html(content);
    return this;
  }
});
