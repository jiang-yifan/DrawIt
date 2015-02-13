DrawIt.Views.PortfolioShow = Backbone.CompositeView.extend({
  template: JST["portfolio/portfolio_show"],
  className: "portfolio_show",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.addDrawings();
    this.addComments();
  },

  addComments: function () {
    var commentsListView = new DrawIt.Views.CommentsList({
      collection: this.model.comments()
    });
    this.addSubview(".portfolio-comments", commentsListView);
  },

  addDrawings: function () {
    var drawingsListView = new DrawIt.Views.DrawingsList({
      collection: this.model.drawings()
    }, false);
    this.addSubview(".portfolio-drawings", drawingsListView);
  },

  render: function () {
    var content = this.template({portfolio: this.model});
    this.$el.html(content);
    this.attachSubviews();
    $(".title").text(this.model.get('name'));
    return this;
  }

})
