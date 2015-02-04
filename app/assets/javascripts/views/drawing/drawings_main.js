DrawIt.Views.DrawingsMain = Backbone.CompositeView.extend({
  template: JST["drawing/main_drawings"],

  events:{
    "click #new_drawing": "showNewDrawingForm",
    "click #new_porfolio": "navigateNewPorfolio",
    'click #porfolios': "showPorfolios"
  },

  initialize: function (options) {
    this.porfolios = options.porfolios;
    this.listenTo(this.collection, "add", this.addDrawing);


  },

  addDrawings: function () {
    this.removeSubviews();
    this.collection.each(this.addDrawing.bind(this));
  },

  addDrawing: function (drawing) {
    var drawingThumbnailView = new DrawIt.Views.DrawingThumbnail({
      model: drawing
    });
    this.addSubview(".drawings-wrapper", drawingThumbnailView);
  },

  navigateNewPorfolio: function (event) {
    event.preventDefault();
    Backbone.history.navigate("#porfolios/new", {trigger: true})
  },

  showNewDrawingForm: function (event) {
    event.preventDefault();
    var newDrawingForm = new DrawIt.Views.NewDrawingForm({
      collection: this.collection
    });
    this.addSubview(".new-drawing-container", newDrawingForm)
    // $(".new-drawing-container").dialog({modal: true})
  },

  showPorfolios: function (event) {
    var newPorfolioView = new DrawIt.Views.NewPorfolio({
      collection: this.porfolios
    });
    this.porfolios.fetch();
    
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.attachSubviews();

    return this;
  },
})
