DrawIt.Views.MainUserPage = Backbone.CompositeView.extend({
  template: JST["profile/main_user_page"],
  className: "main-user group",

  initialize: function (options) {
    this.mainPortfolio = options.mainPortfolio;
    this.activities = options.activities;
    this.addMainPortfolio();
    this.addActivitiesList();
    $(".title").text("Profile");
  },

  addActivitiesList: function () {
    this.activities.fetch();
    var activitiesListView = new DrawIt.Views.ActivitiesList({
      collection: this.activities
    });
    this.addSubview('.profile-right', activitiesListView);
  },

  addMainPortfolio: function () {
    this.mainPortfolio.fetch();
    var mainPortfolioSideView = new DrawIt.Views.MainPortfolioSide({
      model: this.mainPortfolio
    });
    this.addSubview(".profile-left", mainPortfolioSideView)
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
