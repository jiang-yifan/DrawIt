DrawIt.Views.ProfileHeader = Backbone.CompositeView.extend({
  template: JST["header/profile_header"],

  events:{
    "click #new_drawing": "showNewDrawingForm",
    "click #profile": "navigateProfile",
    "click #new_portfolio": "navigateNewPortfolio",
    "click #portfolios": "navigatePortfolios",
    "click #drawings": "navigateDrawings",
    "click #favorites": "navigateFavorites",
    "click #friends": "navigateFriends"
  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.synced);
    this.drawings = options.drawings;
    if(options.hide){
      this.hide = options.hide;
    } else {
      this.hide = false;
    }
  },

  addCover: function () {
    if(!this.profileCoverView){
      this.profileCoverView = new DrawIt.Views.ProfileCover({
        model: this.model,
        el: this.$(".profile-cover")
      });
      this.addSubview(".profile-cover", this.profileCoverView);
    }
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

  navigateProfile: function () {
    Backbone.history.navigate(
      "#users/"+ this.model.userId,
      {trigger: true}
    );
  },

  showNewDrawingForm: function (event) {
    var newDrawingForm = new DrawIt.Views.NewDrawingModal({
      userId: this.model.userId,
      drawings: this.drawings
    });
    $("body").append(newDrawingForm.render().$el);
    newDrawingForm.onRender();
  },

  synced: function () {
    this.addCover();
    this.render();
  },

  render: function () {
    var temp = $(".title").text();
    var content = this.template({profile: this.model, title: temp, hide: this.hide});
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },
})
