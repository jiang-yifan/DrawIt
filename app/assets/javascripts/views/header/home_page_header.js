DrawIt.Views.HomePageHeader = Backbone.CompositeView.extend({
  template: JST["header/home_page_header"],
  className: "main-nav",
  events: {
    "click .profile": 'navigateProfile',
    "click .site-title": 'navigateRoot',
    "click .favorites": 'navigateFavorites'
  },

  initialize: function () {
    this.initiateNotifications();
  },

  initiateNotifications: function () {
    this.notifications = new DrawIt.Collections.Notifications();
    this.listenTo(this.notifications, "sync", this.refreshBadge);
    var notificationsListView = new DrawIt.Views.NotificationsList({
      collection: this.notifications
    });

    this.addSubview(".notifications-wrapper", notificationsListView);
    this.notifications.fetch();
    setInterval(this.refreshNotifications.bind(this), 300000);
  },

  refreshBadge: function () {
    this.$(".badge").text(this.notifications.size());
  },

  refreshNotifications: function () {
    this.notifications.fetch();
  },

  navigateFavorites: function () {
    Backbone.history.navigate(
      "#users/" + this.model.userId + "/drawings/favorites",
      {trigger: true}
    );
  },

  navigateProfile: function (event) {
    event.preventDefault();
    Backbone.history.navigate(
      "#users/" + this.model.userId,
      {trigger: true}
    )
  },

  navigateRoot: function () {
    Backbone.history.navigate( "#",
      {trigger: true}
    )
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
