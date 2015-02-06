DrawIt.Views.TagsList = Backbone.CompositeView.extend({
  template: JST["tag/tags_list"],
  events:{
    "click .new-tag": 'showNewTagForm'
  },

  initialize: function () {
    this.addTags();
    this.listenTo(this.collection, "add", this.addTags);
    this.listenTo(this.collection, "remove", this.removeTag);
  },

  addTags: function () {
    this.collection.each(this.addTag.bind(this));
  },

  addTag: function (tag) {
    var tagShowView = new DrawIt.Views.TagShow({
      model: tag,
      collection: this.collection
    });
    this.addSubview(".tags-list", tagShowView)
  },

  showNewTagForm: function (event) {
    event.preventDefault();
    $(event.currentTarget).css("display", "none");

    var newTagForm = new DrawIt.Views.NewTagForm({
      collection: this.collection
    });
    this.addSubview(".new-tag-form", newTagForm)
  },

  removeTag: function (tag) {
    this.removeSubviewByModel(tag);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }

});
