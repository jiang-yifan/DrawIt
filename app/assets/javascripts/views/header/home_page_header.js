DrawIt.Views.HomePageHeader = Backbone.View.extend({
  template: JST["header/home_page_header"],
  events: {
    "click": 'navigateProfile'
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});
