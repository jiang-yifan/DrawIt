DrawIt.Views.DrawingPreview = Backbone.View.extend({
  template:JST["drawing/drawing_preview"],
  className: "preview-wrapper",
  events:{
    "click": "checkBox"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  checkBox: function (event) {
    event.preventDefault();
    var $currentTarget = $(event.currentTarget);
    var $checkBox = $currentTarget.find("input");
    $checkBox.prop("checked", !$checkBox.prop("checked"))
  },

  render: function(){
    var content = this.template({drawing: this.model});
    this.$el.html(content);

    return this;
  }
});
