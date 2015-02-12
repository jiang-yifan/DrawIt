DrawIt.Views.NotificationsList = Backbone.CompositeView.extend({
  template: JST['notification/notifications_list'],
  className: "notifications-main",

  initialize: function () {
    this.listenTo(this.collection, "add", this.addNotification);
    this.addNotifications();
  },

  addNotifications: function () {
    this.collection.each(this.addNotification.bind(this));
  },

  addNotification: function (notification) {
    $('no-notification').addClass("hidden");
    var notificationShowView = new DrawIt.Views.NotificationShow({
      model: notification
    });
    this.addSubview(".notifications-list", notificationShowView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
