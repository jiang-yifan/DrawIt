DrawIt.Views.MainPage = Backbone.CompositeView.extend({
  template: JST["home/main_page"],

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }


});
