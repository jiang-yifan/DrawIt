DrawIt.Views.PorfoliosMain = Backbone.CompositeView.extend({
  template: JST["porfolio/porfolios_main"],
  className: "porfolios-main",
  initialize: function () {
    this.listenTo(this.collection, "sync", this.addPorfolios);
    this.addPorfolios();
  },

  addPorfolios: function () {
    this.removeSubviews();
    this.collection.each(this.addPorfolio.bind(this));
  },

  addPorfolio: function (porfolio) {
    var porfolioThumbnail = new DrawIt.Views.PorfolioThumbnail({
      model: porfolio
    });
    this.addSubview(".porfolios-list", porfolioThumbnail);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

})
