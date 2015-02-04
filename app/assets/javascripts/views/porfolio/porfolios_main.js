DrawIt.Views.PorfoliosMain = Backbone.CompositeView.extend({
  template: JST["porfolio/porfolios_main"],
  initialize: function () {
    this.listenTo(this.collection, "sync", this.addPorfolios.bind(this));
    this.addPorfolios();
  },

  addPorfolios: function () {
    this.collection.each(this.addPorfolio.bind(this));
  },

  addPorfolio: function (porfolio) {
    var porfolioPreview = new DrawIt.Views.PorfolioPreview({
      model: porfolio
    });
    this.addSubview("", porfolioPreview);
  }

})
