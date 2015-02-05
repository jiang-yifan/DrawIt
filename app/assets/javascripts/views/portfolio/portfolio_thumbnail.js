DrawIt.Views.PortfolioThumbnail = Backbone.View.extend({
  template: JST["portfolio/portfolio_thumbnail"],
  className: "portfolio-thumbnail-wrapper",
  events:{
    'click .portfolio-thumbnail': "triggerPortfolioShow"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  triggerPortfolioShow: function () {
    // Backbone.history.navigate(
    //   "#portfolios/" + this.model.id,
    //   {trigger: true}
    // );
    this.trigger("clickedPortfolio", this.model.id);
  },

  render: function () {
    var content = this.template({portfolio: this.model});
    this.$el.html(content);

    return this;
  }
});
