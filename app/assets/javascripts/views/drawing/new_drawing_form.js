DrawIt.Views.NewDrawingForm = Backbone.View.extend({
  template: JST['drawing/new_drawing'],
  tagName: "form",
  events:{
    "click .submit": "createDrawing"
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  createDrawing: function (event) {
    event.preventDefault();
    var data = $(event.delegateTarget).serializeJSON();
    var drawing = new DrawIt.Models.Drawing();
    var view = this;
    drawing.save(data,{
      success: function () {
        view.collection.add(drawing);
        Backbone.history.navigate("");
      }
    });
  }
})
