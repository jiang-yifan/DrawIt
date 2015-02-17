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
    this.listenTo(this.model, "sync", this.render)
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
    this.searchView = new DrawIt.Views.HomePageSearch();
    this.addSubview(".search-container", this.searchView);
  },

  refreshBadge: function () {
    this.count = 0;
    this.notifications.each(function (notification) {
      if (notification.get("status") ==='unviewed') {
        this.count++;
      }
    }.bind(this))
    this.$(".badge").text(this.count);
  },

  refreshNotifications: function () {
    this.notifications.fetch({remove: false});
  },

  navigateFavorites: function () {
    this.searchView.clear();
    Backbone.history.navigate(
      "#users/" + this.model.userId + "/drawings/favorites",
      {trigger: true}
    );
  },

  navigateProfile: function (event) {
    event.preventDefault();
    this.searchView.clear();
    Backbone.history.navigate(
      "#users/" + this.model.userId,
      {trigger: true}
    );
  },

  navigateRoot: function () {
    this.searchView.clear();
    Backbone.history.navigate( "#",
      {trigger: true}
    );
  },

  hideNotifications: function (event) {
    event.stopPropagation();
    $('.notifications').removeClass("clicked");
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
    if(this.notifications.size() == 0){
      return;
    }
    this.searchView.unShow();
    if (!$(".notifications-wrapper").hasClass("hidden")) {
      this.hideNotifications(event);
    } else {
      $('.notifications').addClass("clicked");
      $(".notifications-wrapper").removeClass("hidden");
      $('.notification-title').click(function (event) {
        event.stopPropagation();
      });
    }
  },

  onRender: function () {
    $(":not(.search)").click(this.searchView.unShow);
  },

  render: function () {
    var content = this.template({profile: this.model});
    this.$el.html(content);
    this.$(".badge").text(this.count);
    this.attachSubviews();
    return this;
  }
});
