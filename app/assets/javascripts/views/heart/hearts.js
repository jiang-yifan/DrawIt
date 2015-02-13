DrawIt.Views.Hearts = Backbone.View.extend({
  tagName: "img",
  render: function () {
    if(this.model.get("hearts") ==="true"){
      this.$el.attr("src", "https://www.filepicker.io/api/file/kFDmmEprS0fsEdhMtGVq");
    } else {
      this.$el.attr("src", "https://www.filepicker.io/api/file/IhdpwKOeQBSKeJbNXs6W");
    }
    return this;
  }
});
