DrawIt.Routers.Router = Backbone.Router.extend({
  routes:{
    "":"homePage",
    "drawings": "mainDrawings",
    "portfolios": "mainPortfolios",
    "portfolios/new": "newPortfolio",
    "drawings/favorites": "mainFavorites",
    "portfolios/:id": "showPortfolio",
  },

  initialize: function (options) {
    this.$header = options.$header
    this.$rootEl = options.$rootEl;
    this.userDrawings = new DrawIt.Collections.Drawings();
    this.userPortfolios = new DrawIt.Collections.Portfolios();
    this.userFavoriteDrawings =
        new DrawIt.Collections.FavoriteDrawings();

    this.createHeader();

  },

  createHeader: function () {
    this.header = new DrawIt.Views.ProfileHeader();
    this.$header.html(this.header.render().$el);
  },

  homePage: function () {
    // var mainPageView = new DrawIt.Views.MainPage({
    //
    // });
    // this._swapView(mainPageView);
  },

  mainDrawings: function () {
    var drawingsListView = new DrawIt.Views.DrawingsList({
      collection: this.userDrawings
    })
    this.userDrawings.fetch();
    this._swapView(drawingsListView);
  },

  mainFavorites: function () {
    var favoritesListView = new DrawIt.Views.FavoritesList({
      collection: this.userFavoriteDrawings
    })
    this.userFavoriteDrawings.fetch();
    this._swapView(favoritesListView);
  },

  mainPortfolios: function () {
    var portfoliosListView = new DrawIt.Views.PortfoliosList({
      collection: this.userPortfolios
    });
    this.userPortfolios.fetch();
    this._swapView(portfoliosListView);
  },

  showPortfolio: function (id) {
    var portfolio = this.userPortfolios.getOrFetch(id, "Portfolio");
    var portfolioShowView = new DrawIt.Views.PortfolioShow({
      model: portfolio
    });
    this._swapView(portfolioShowView);
  },

  newPortfolio: function () {
    var newPortfolioView = new DrawIt.Views.NewPortfolio({
      collection: this.userDrawings
    });

    //WHAT?????
    this.userDrawings.fetch();
    this._swapView(newPortfolioView);
  },

  // showPortfolios: function () {
  //   var portfoliosIndexView = new DrawIt.Views.PortfoliosMain({
  //     collection: this.userPortfolios
  //   });
  //   this.userPortfolios.fetch();
  //   this._swapView(portfoliosIndexView)
  // }

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },
});
