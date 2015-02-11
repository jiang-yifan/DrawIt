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

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.synced);
    this.drawings = options.drawings;
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
    var newDrawingForm = new DrawIt.Views.NewDrawingModal({
      userId: this.model.userId,
      drawings: this.drawings
    });
    $("#main").append(newDrawingForm.render().$el);
    newDrawingForm.onRender();
  },

  synced: function () {
    this.addCover();
    this.render();
  },

  render: function () {
    var content = this.template({profile: this.model});
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },
})
