DrawIt.Views.PorfolioThumbnail = Backbone.View.extend({
  template: JST["porfolio/porfolio_thumbnail"],
  className: "porfolio-thumbnail-wrapper",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({porfolio: this.model});
    this.$el.html(content);

    return this;
  }
});
