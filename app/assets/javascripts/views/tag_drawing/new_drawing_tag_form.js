DrawIt.Views.NewDrawingTagForm = DrawIt.Views.NewTagForm.extend({
  createTag: function (event) {
    event.preventDefault();
    var tagData = $(event.delegateTarget).serializeJSON().tag;
    var tag = new DrawIt.Models.Tag(tagData);
    $(".new-tag-text").val("");
    this.collection.add(tag);
  }
})
