DrawIt.Views.NewDrawingTagsList = DrawIt.Views.TagsList.extend({
  events:{
    "click .new-tag": 'showNewTagForm'
  },

  showNewTagForm: function (event) {
    event.preventDefault();
    $(event.currentTarget).css("display", "none");

    var newTagForm = new DrawIt.Views.NewDrawingTagForm({
      collection: this.collection
    });
    this.addSubview(".new-tag-form", newTagForm)
  },
});
