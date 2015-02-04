DrawIt.Views.NewPorfolio = Backbone.CompositeView.extend({
  template: JST["porfolio/new_porfolio_form"],
  tagName: "form",
  events:{
    'click .submit': "createPorfolio"
  },

  initialize: function () {
    this.listenTo(this.collection, "sync", this.addDrawings);
    this.addDrawings();
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

  createPorfolio: function (event) {
    event.preventDefault();
    $(".submit").prop('disabled', true);

    var data = $(event.delegateTarget).serializeJSON();
    var newPorfolio = new DrawIt.Models.Porfolio();
    newPorfolio.save(data,{
      success: function(){
        Backbone.history.navigate("#drawings", {trigger: true});
      }
    });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.attachSubviews();
    return this;
  }
})
