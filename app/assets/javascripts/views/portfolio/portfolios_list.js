DrawIt.Views.PortfoliosList = Backbone.CompositeView.extend({
  template: JST["portfolio/portfolios_list"],
  events:{
    // "clickedPortfolio .portfolio-thumbnail-wrapper": "showPortfolio"
  },

  initialize: function () {
    this.listenTo(this.collection, "add", this.addPortfolio);
    this.addPortfolios();
  },

  addPortfolios: function () {
    this.collection.each(this.addPortfolio.bind(this));
  },

  addPortfolio: function (portfolio) {
    var portfolioThumbnail = new DrawIt.Views.PortfolioThumbnail({
      model: portfolio
    });
    this.listenTo(portfolioThumbnail, "clickedPortfolio", this.showPortfolio.bind(this))
    this.addSubview(".portfolios-list", portfolioThumbnail);
  },

  showPortfolio: function (id) {
    var portfolio = this.collection.getOrFetch(id);
    var portfolioShowView = new DrawIt.Views.PortfolioShow({
      model: portfolio
    })
    this.removeSubviews();
    Backbone.history.navigate("#portfolios/" + id);
    this.addSubview(".portfolios-list", portfolioShowView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

})
