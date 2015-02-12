DrawIt.Views.HomePageHeader = Backbone.CompositeView.extend({
  template: JST["header/home_page_header"],
  className: "main-nav",
  events: {
    "click .profile": 'navigateProfile',
    "click .site-title": 'navigateRoot',
    "click .favorites": 'navigateFavorites',
    'click .notifications': "showNotifications",
    "click": "hideNotifications",
    'click .sign-out': 'signOut'
  },

  initialize: function () {
    this.initiateNotifications();
    this.initiateSearchView();
  },

  initiateNotifications: function () {
    this.notifications = new DrawIt.Collections.Notifications();
    this.listenTo(this.notifications, "sync", this.refreshBadge);
    this.notifications.fetch();
    var notificationsListView = new DrawIt.Views.NotificationsList({
      collection: this.notifications
    });
    this.addSubview(".notifications-wrapper", notificationsListView);
    setInterval(this.refreshNotifications.bind(this), 30000);

    $(":not(.notifications)").click(this.hideNotifications);
  },

  initiateSearchView: function () {
    var searchView = new DrawIt.Views.HomePageSearch();
    this.addSubview(".search-container", searchView)
  },

  refreshBadge: function () {
    var count = 0;
    this.notifications.each(function (notification) {
      if (notification.get("status") ==='unviewed') {
        count++;
      }
    })
    this.$(".badge").text(count);
  },

  refreshNotifications: function () {
    this.notifications.fetch({remove: false});
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
    );
  },

  navigateRoot: function () {
    Backbone.history.navigate( "#",
      {trigger: true}
    );
  },

  hideNotifications: function (event) {
    event.stopPropagation();
    $(".notifications-wrapper").addClass("hidden");
  },

  signOut: function (event) {
    $.ajax({
      url: "/session",
      method:"delete",
      success: function (data) {
        window.location.href = data.redirect;
      }
    });
  },

  showNotifications: function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (!$(".notifications-wrapper").hasClass("hidden")) {
      $(".notifications-wrapper").addClass("hidden");
    } else {
      $(".notifications-wrapper").removeClass("hidden");
      $('.notification-title').click(function (event) {
        event.stopPropagation();
      });
    }
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
