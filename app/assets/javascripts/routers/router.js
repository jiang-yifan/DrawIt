DrawIt.Routers.Router = Backbone.Router.extend({
  routes:{
    "":"homePage",
    "drawings": "mainDrawings",
    "drawings/new": "newDrawing",
    // "porfolios": "showPorfolios"
    "porfolios/new": "newPorfolio"// maybe make modal instead
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.userDrawings = new DrawIt.Collections.Drawings();
    this.userPorfolios = new DrawIt.Collections.Porfolios();
  },

  homePage: function () {
    var mainPageView = new DrawIt.Views.MainPage({

    });
    this._swapView(mainPageView);
  },

  mainDrawings: function () {
    var mainDrawingsView = new DrawIt.Views.DrawingsMain({
      drawings: this.userDrawings,
      porfolios: this.userPorfolios
    })
    this.userDrawings.fetch();
    this._swapView(mainDrawingsView);
  },

  newDrawing: function () {
    var newDrawingView = new DrawIt.Views.NewDrawingForm({
      collection: this.userDrawings
    });
    this._swapView(newDrawingView);
  },

  newPorfolio: function () {
    var newPorfolioView = new DrawIt.Views.NewPorfolio({
      collection: this.userDrawings
    });
    this.userDrawings.fetch();
    this._swapView(newPorfolioView);
  },

  // showPorfolios: function () {
  //   var porfoliosIndexView = new DrawIt.Views.PorfoliosMain({
  //     collection: this.userPorfolios
  //   });
  //   this.userPorfolios.fetch();
  //   this._swapView(porfoliosIndexView)
  // }

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },
});
