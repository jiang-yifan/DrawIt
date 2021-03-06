DrawIt.Views.NewDrawingModalContent = Backbone.CompositeView.extend({
  template: JST['drawing/new_drawing'],
  tagName: "form",
  events:{
    "click .new-drawing-preview-wrapper": "pickDrawing",
    "click .submit-drawing": "createDrawing"
  },

  initialize: function (options) {
    this.userId = options.userId
    this.createTagsView();
    this.tagsInfo = [];
  },

  addNewTag: function (tag) {
    this.tagsInfo.push(tag.get('tag_name'));
  },

  createTagsView: function () {
    this.newTags = new DrawIt.Collections.Tags([],{
      removable: true
    });
    var newDrawinTagsListView = new DrawIt.Views.NewDrawingTagsList({
      collection: this.newTags
    });
    this.addSubview(".new-tags-wrapper", newDrawinTagsListView);
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
    this.$(".pick").addClass("hidden");
  },

  createDrawing: function (event) {
    event.preventDefault();
    $button = $(event.currentTarget);
    $button.prop("disabled", true);
    var data = $(event.delegateTarget).serializeJSON();
    if(!data.drawing){
      data.drawing = {};
    }
    this.newTags.each(this.addNewTag.bind(this));
    if(this.file.url){
      data.drawing.file_url = this.file.url;
      data.drawing.tag_names = this.tagsInfo;
      var drawing = new DrawIt.Models.Drawing();
      var view = this;
      drawing.save(data,{
        success: function (drawing) {
          view.savedDrawing(drawing);
          $button.prop("disabled", false);
        },

        error: function () {
          $button.prop("disabled", false)
        }
      });
    } else {
      $button.prop("disabled", false)
    }
  },

  savedDrawing: function (drawing) {
    this.collection.add(drawing);
    Backbone.history.navigate(
      "#users/" + this.userId +"/drawings",
      {trigger: true}
    );
    this.trigger("finishedUpload");
  }
})
