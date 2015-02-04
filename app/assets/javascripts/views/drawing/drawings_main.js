DrawIt.Views.DrawingsMain = Backbone.CompositeView.extend({
  template: JST["drawing/main_drawings"],

  events:{
    "click #new_drawing": "showNewDrawingForm",
    "click #new_porfolio": "navigateNewPorfolio",
    "click #porfolios": "showPorfolios",
    "click #your_drawings": "showDrawings"
  },

  initialize: function (options) {
    this.drawings = options.drawings;
    this.porfolios = options.porfolios;
    this.showDrawings();
  },

  navigateNewPorfolio: function (event) {
    Backbone.history.navigate("#porfolios/new", {trigger: true})
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

  showPorfolios: function (event) {
    this.removeSubviews();
    var porfoliosMainView = new DrawIt.Views.PorfoliosMain({
      collection: this.porfolios
    });
    this.porfolios.fetch();
    this.addSubview(".images-wrapper", porfoliosMainView)

  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.attachSubviews();

    return this;
  },
})
