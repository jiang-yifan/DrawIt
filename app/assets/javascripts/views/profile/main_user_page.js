DrawIt.Views.MainUserPage = Backbone.CompositeView.extend({
  template: JST["profile/main_user_page"],
  initialize: function (options) {
    this.mainPortfolio = options.mainPortfolio;
    this.activities = options.activities;
    this.addMainPortfolio();
    this.addActivitiesList();

    this.listenTo(this.activities, "add", this.addActivity);
  },

  addActivitiesList: function () {
    this.activities.fetch();
    var activitiesListView = new DrawIt.Views.ActivitiesList({
      collection: this.activities
    });
    this.addSubview('.profile-right', activitiesListView);
    // this.activities.each(this.addActivity.bind(this));
  },

  // addActivity: function (activity) {
  //   var type = activity.activity_type
  //   var id = activity.activity_id
  //   if (type === "comment") {
  //
  //   }
  // },

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
