DrawIt.Views.PortfoliosMain = Backbone.CompositeView.extend({
  template: JST["portfolio/portfolios_main"],
  className: "portfolios-main",
  events:{
    "click #new_drawing": "showNewDrawingForm",
    "click #new_portfolio": "navigateNewPortfolio",
    "click #your_drawings": "navigateDrawings",
    "click #portfolios": "navigatePortfolios"
  },

  initialize: function (options) {
    this.portfolios = options.portfolios
    this.showPortfolios();
  },

  navigateDrawings: function (event) {
    Backbone.history.navigate("#drawings", {trigger: true})
  },

  navigateNewPortfolio: function (event) {
    Backbone.history.navigate("#portfolios/new", {trigger: true})
  },

  navigatePortfolios: function (event) {
    Backbone.history.navigate("#portfolios", {trigger: true})
  },

  showPortfolios: function (event) {
    var portfoliosListView = new DrawIt.Views.PortfoliosList({
      collection: this.portfolios
    });
    this.portfolios.fetch();
    this.addSubview(".images-wrapper", portfoliosListView)
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

})
