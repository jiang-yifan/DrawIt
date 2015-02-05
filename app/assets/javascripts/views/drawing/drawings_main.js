DrawIt.Views.DrawingsMain = Backbone.CompositeView.extend({
  template: JST["drawing/main_drawings"],

  events:{
    "click #new_drawing": "showNewDrawingForm",
    "click #new_portfolio": "navigateNewPortfolio",
    "click #portfolios": "navigatePortfolios",
    "click #your_drawings": "showDrawings"
  },

  initialize: function (options) {
    this.drawings = options.drawings;
    this.showDrawings();
  },

  navigateNewPortfolio: function (event) {
    Backbone.history.navigate("#portfolios/new", {trigger: true})
  },

  navigatePortfolios: function () {
    Backbone.history.navigate("#portfolios", {trigger: true})
  },

  showNewDrawingForm: function (event) {
    var newDrawingForm = new DrawIt.Views.NewDrawingForm({
      collection: this.collection
    });
    this.addSubview(".new-drawing-container", newDrawingForm)
    // $(".new-drawing-container").dialog({modal: true})
  },

  showDrawings: function (event) {
    this.removeSubviews()
    var drawingsListView = new DrawIt.Views.DrawingsList({
      collection: this.drawings
    });
    this.addSubview(".images-wrapper", drawingsListView);
  },

  // showPortfolios: function (event) {
  //   this.removeSubviews();
  //   var portfoliosMainView = new DrawIt.Views.PortfoliosMain({
  //     collection: this.portfolios
  //   });
  //   this.portfolios.fetch();
  //   this.$(".title").text("Portfolios");
  //   this.addSubview(".images-wrapper", portfoliosMainView)
  // },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },
})
