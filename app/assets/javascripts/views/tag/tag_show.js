DrawIt.Views.TagShow = Backbone.View.extend({
  template: JST["tag/tag_show"],
  className: "tag-wrapper group",
  events: {
    "click .tag-remove": "removeTag"
  },

  removeTag: function (event) {
    event.preventDefault();
    $(event.currentTarget).prop("disabled", true);
    var view = this;
    this.model.destroy();
  },

  render: function () {
    var content = this.template({
      tag: this.model,
      tags: this.collection
    });
    this.$el.html(content);

    return this;
  }
});
