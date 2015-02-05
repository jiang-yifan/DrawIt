DrawIt.Views.InnerProfileNav = Backbone.CompositeView.extend({
  template: JST["navigation/inner_profile_nav"],
  className: "main-container group",

  initialize: function (options) {
    this.userDrawings = options.drawings;
    this.userPorfolios = options.porfolios;

    var drawingsNavView = new DrawIt.Views.DrawingsNav();
    this.addSubview(".header-nav", drawingsNavView);

    var drawingsListView = new DrawIt.Views.DrawingsList({
      collection: this.userDrawings
    });
    this.addSubview(".drawings-wrapper", drawingsListView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.attachSubviews();
    return this;
  }
});
