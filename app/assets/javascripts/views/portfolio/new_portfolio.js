DrawIt.Views.NewPortfolio = Backbone.CompositeView.extend({
  template: JST["portfolio/new_portfolio_form"],
  tagName: "form",
  events:{
    "click .submit": "createPortfolio",
    "click .drawing-preview-wrapper": "setPortfolioImage"
  },

  initialize: function () {

    this.listenTo(this.collection, "add", this.addDrawing);
    this.addDrawings();
    this.clicked = false;
  },

  addDrawings: function () {
    this.collection.each(this.addDrawingPreview.bind(this));
  },

  addDrawingPreview: function (drawing) {
    var drawingPreview = new DrawIt.Views.DrawingPreview({
      model: drawing
    });
    this.addSubview(".drawings-preview", drawingPreview);
  },

  createPortfolio: function (event) {
    event.preventDefault();
    $(".submit").prop('disabled', true);

    var data = $(event.delegateTarget).serializeJSON();
    var newPortfolio = new DrawIt.Models.Portfolio();
    newPortfolio.save(data,{
      success: function(){
        Backbone.history.navigate("#drawings", {trigger: true});
      }
    });
  },

  setPortfolioImage: function (event) {
    event.preventDefault();
    if(!this.clicked){
      var preview = $(event.currentTarget).find("#background-preview");
      var drawingId = preview.data("id");
      this.clicked = true;

      var newDrawingThumbnail = new DrawIt.Views.DrawingCoverThumbnail({
        model: this.collection.get(drawingId)
      });
      $(".portfolio-image").empty();
      this.addSubview(".portfolio-image", newDrawingThumbnail);
    }
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.attachSubviews();
    return this;
  }
})