DrawIt.Views.ProfileHeader = Backbone.CompositeView.extend({
  template: JST["header/profile_header"],

  events:{
    "click #new_drawing": "showNewDrawingForm",
    "click #new_portfolio": "navigateNewPortfolio",
    "click #portfolios": "navigatePortfolios",
    "click #your_drawings": "navigateDrawings",
    "click #favorites": "navigateFavorites",
    "click #friends": "navigateFriends"
  },

  navigateDrawings: function () {
    Backbone.history.navigate("#drawings", {trigger: true})
  },

  navigateFavorites: function () {
    Backbone.history.navigate("#drawings/favorites", {trigger: true})
  },

  navigateFriends: function () {
    Backbone.history.navigate("friends", {trigger: true})
  },

  navigateNewPortfolio: function (event) {
    Backbone.history.navigate("#portfolios/new", {trigger: true})
  },

  navigatePortfolios: function () {
    Backbone.history.navigate("#portfolios", {trigger: true})
  },

  showNewDrawingForm: function (event) {
    var newDrawingForm = new DrawIt.Views.NewDrawingForm({
      collection: this.collection
    });
    this.addSubview(".new-drawing-container", newDrawingForm)
    // $(".new-drawing-container").dialog({modal: true})
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },
})
