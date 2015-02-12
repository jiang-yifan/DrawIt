DrawIt.Views.NewTagForm = Backbone.View.extend({
  template: JST["tag/new_tag_form"],
  tagName: "form",
  events:{
    "click .submit-tag": "createTag"
  },

  createTag: function (event) {
    event.preventDefault();
    $form = $(event.delegateTarget)
    var data = $form.serializeJSON();
    data.tag.taggable_id = this.collection.commentedOn.id
    data.tag.taggable_type =
        this.collection.commentedOn.constructor.modelType;
    var newTag = new DrawIt.Models.Tag(data)
    $(".new-tag-text").val("");
    this.collection.create(newTag);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this
  }

});
