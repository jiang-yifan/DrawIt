DrawIt.Routers.Router = Backbone.Router.extend({
  routes:{
    "":"homePage",
    "users/:user_id/drawings": "mainDrawings",
    "users/:user_id/drawings/favorites": "mainFavorites",
    "users/:user_id/portfolios": "mainPortfolios",
    "portfolios/new": "newPortfolio",
    "portfolios/:id": "showPortfolio",
    "users/:user_id/friends": "mainFriends",
    "users/:user_id": "mainProfile"
  },

  initialize: function (options) {
    this.currentUserId = options.userId;
    this.$header = options.$header;
    this.$rootEl = options.$rootEl;
    this.$cover = options.$cover;

    this.initiateUser();
    this.createHeader();
  },

  createCover: function (id) {
    this.profile = new DrawIt.Models.Profile({userId: id});
    this.profile.fetch();
    this.profileHeader && this.profileHeader.remove();
    this.profileHeader = new DrawIt.Views.ProfileHeader({
      model: this.profile,
      drawings: this.userDrawings
    });
    this.$cover.html(this.profileHeader.render().$el);
  },

  createHeader: function () {
    this.homeHeader = new DrawIt.Views.HomePageHeader({
      model: this.userProfile
    });
    this.$header.html(this.homeHeader.render().$el);
  },

  initiateUser: function () {
    this.currentUser = new DrawIt.Models.User({
      id: this.currentUserId
    });
    this.userProfile = new DrawIt.Models.Profile({
      userId: this.currentUserId
    });
    this.userDrawings = new DrawIt.Collections.Drawings([],{
      userId: this.currentUserId
    });
  },

  homePage: function () {
    this.profileHeader && this.profileHeader.remove();
    var homePageView = new DrawIt.Views.MainPage({
      model: this.userProfile
    });
    this.userProfile.fetch();
    this._swapView(homePageView);
  },

  mainDrawings: function (userId) {
    this.drawings = new DrawIt.Collections.Drawings([], {
      userId: userId
    });
    this.createCover(userId);
    var drawingsListView = new DrawIt.Views.DrawingsList({
      collection: this.drawings
    });
    this.drawings.fetch();
    this._swapView(drawingsListView);
  },

  mainFavorites: function (userId) {
    this.createCover(userId);
    this.favoriteDrawings = new DrawIt.Collections.FavoriteDrawings([], {
      userId: userId
    });
    var favoritesListView = new DrawIt.Views.FavoritesList({
      collection: this.favoriteDrawings
    });
    this.favoriteDrawings.fetch();
    this._swapView(favoritesListView);
  },

  mainFriends: function (userId) {
    this.createCover(userId);
    this.friends = new DrawIt.Collections.Friends([], {
      userId: userId}
    );
    var friendsListView = new DrawIt.Views.FriendsList({
      collection: this.friends
    });
    this.friends.fetch();
    this._swapView(friendsListView);
  },

  mainPortfolios: function (userId) {
    this.createCover(userId);
    this.portfolios = new DrawIt.Collections.Portfolios([], {
      userId: userId
    });
    var portfoliosListView = new DrawIt.Views.PortfoliosList({
      collection: this.portfolios
    });
    this.portfolios.fetch();
    this._swapView(portfoliosListView);
  },

  mainProfile: function (userId) {
    this.createCover(userId);
    this.mainPortfolio = new DrawIt.Models.MainPortfolio({userId: userId});
    this.activities = new DrawIt.Collections.Activities([],{userId: userId});

    var mainUserPageView = new DrawIt.Views.MainUserPage({
      mainPortfolio: this.mainPortfolio,
      activities: this.activities
    });

    this._swapView(mainUserPageView);
  },

  showPortfolio: function (id) {
    var portfolio = new DrawIt.Models.Portfolio({id: id})
    var portfolioShowView = new DrawIt.Views.PortfolioShow({
      model: portfolio
    });
    this._swapView(portfolioShowView);
  },

  newPortfolio: function () {
    this.createCover(this.currentUserId);
    // this.userDrawings = new DrawIt.Collections.Drawings([], {
    //   userId: this.currentUserId
    // });
    var newPortfolioView = new DrawIt.Views.NewPortfolio({
      collection: this.userDrawings
    });
    this.userDrawings.fetch();
    this._swapView(newPortfolioView);
  },


  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },
});
