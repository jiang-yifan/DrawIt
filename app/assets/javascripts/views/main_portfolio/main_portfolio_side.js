DrawIt.Views.MainPortfolioSide = Backbone.CompositeView.extend({
  template: JST["main_portfolio/main_portfolio_side"],
  className: "main_portfolio_side",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.addDrawings();
  },

  addDrawings: function () {
    var drawingsListView = new DrawIt.Views.DrawingsList({
      collection: this.model.drawings()
    });
    this.addSubview(".main-portfolio-drawings", drawingsListView);
  },

  render: function () {
    var content = this.template({mainPortfolio: this.model});
    this.$el.html(content);

    return this;
  }

})
