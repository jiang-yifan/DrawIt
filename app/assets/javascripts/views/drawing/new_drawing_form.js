DrawIt.Views.NewDrawingModalContent = Backbone.View.extend({
  template: JST['drawing/new_drawing'],
  tagName: "form",
  events:{
    "click .pick": "pickDrawing",
    "click .submit": "createDrawing"
  },

  initialize: function (options) {
    this.userId = options.userId
  },

  render: function () {
    var content = this.template({view: this});
    this.$el.html(content);
    return this;
  },

  pickDrawing: function (event) {
    event.preventDefault();
    filepicker.pick({
      container: 'modal',
      services: ['COMPUTER']
    }, this.uploadedDrawing.bind(this));
  },

  uploadedDrawing: function (file) {
    this.file = file;
    this.$(".new-drawing-preview").attr("src", file.url);
  },

  createDrawing: function (event) {
    event.preventDefault();
    var data = $(event.delegateTarget).serializeJSON();
    if(!data.drawing){
      data.drawing = {};
    }
    data.drawing.file_url = this.file.url;
    var drawing = new DrawIt.Models.Drawing();
    var view = this;
    drawing.save(data,{
      success: function () {
        view.collection.add(drawing);
        Backbone.history.navigate(
          "#users/" + view.userId +"/drawings",
          {trigger: true}
        );
        view.trigger("finishedUpload");
      }
    });
  }
})
