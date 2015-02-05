DrawIt.Routers.Router = Backbone.Router.extend({
  routes:{
    "":"mainDrawings",
    "drawings": "mainDrawings",
    "portfolios": "mainPortfolios",
    "portfolios/new": "newPortfolio"
    // "portfolios/:id": "showPortfolio"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.userDrawings = new DrawIt.Collections.Drawings();
    this.userPortfolios = new DrawIt.Collections.Portfolios();
  },

  homePage: function () {
    var mainPageView = new DrawIt.Views.MainPage({

    });
    this._swapView(mainPageView);
  },

  mainPortfolios: function () {
    var mainPortfoliosView = new DrawIt.Views.PortfoliosMain({
      portfolios: this.userPortfolios
    });
    this.userPortfolios.fetch();
    this._swapView(mainPortfoliosView);
  },

  mainDrawings: function () {
    var mainDrawingsView = new DrawIt.Views.DrawingsMain({
      drawings: this.userDrawings
    })
    this.userDrawings.fetch();
    this._swapView(mainDrawingsView);
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
    this.userDrawings.fetch({
      succes: function () {
        console.log("fetched succes");
      }
    });
    debugger
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
