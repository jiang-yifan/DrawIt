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

  initialize: function () {
    this.listenTo(this.model, "sync", this.addCover);
  },

  addCover: function () {
    var profileCoverView = new DrawIt.Views.ProfileCover({
      model: this.model,
      el: $(".profile-cover")
    });
    this.addSubview(".profile-cover", profileCoverView);
  },

  navigateDrawings: function () {
    Backbone.history.navigate(
      "#users/"+ this.model.userId + "/drawings",
      {trigger: true}
    );
  },

  navigateFavorites: function () {
    Backbone.history.navigate(
      "#users/"+ this.model.userId + "/drawings/favorites",
      {trigger: true}
    );
  },

  navigateFriends: function () {
    Backbone.history.navigate(
      "#users/"+ this.model.userId + "/friends",
      {trigger: true}
    );
  },

  navigateNewPortfolio: function (event) {
    Backbone.history.navigate(
      "#portfolios/new",
      {trigger: true}
    );
  },

  navigatePortfolios: function () {
    Backbone.history.navigate(
      "#users/"+ this.model.userId + "/portfolios",
      {trigger: true}
    );
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
