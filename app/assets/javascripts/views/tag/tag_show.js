DrawIt.Views.TagShow = Backbone.View.extend({
  template: JST["tag/tag_show"],
  className: "tag-wrapper group",
  events: {
    "click .tag-remove": "removeTag"
  },

  removeTag: function (event) {
    debugger
    event.preventDefault();
    $(event.currentTarget).prop("disabled", true);
    var view = this;
    this.model.destroy({
      success: function () {
        view.collection.remove(view.model);
      }
    });
  },

  render: function () {
    var content = this.template({tag: this.model});
    this.$el.html(content);

    return this;
  }
});
