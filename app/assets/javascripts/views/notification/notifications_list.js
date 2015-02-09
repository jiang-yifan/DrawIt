DrawIt.Views.NotificationsList = Backbone.CompositeView.extend({
  template: JST['notification/notifications_list'],

  initialize: function () {
    this.listenTo(this.collection, "add", this.addNotifications);
  },

  addNotifications: function () {
    this.removeSubviews();
    this.collection.each(this.addNotification.bind(this));
  },

  addNotification: function (notification) {
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
