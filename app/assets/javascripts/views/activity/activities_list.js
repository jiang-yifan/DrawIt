DrawIt.Views.ActivitiesList = Backbone.CompositeView.extend({
  template: JST["activity/activity_list"],

  initialize: function () {
    this.addActivities();
    this.listenTo(this.collection, "add", this.addActivity);
  },

  addActivities: function () {
    this.collection.each(this.addActivity.bind(this));
  },

  addActivity: function (activity) {
    var activityShowView = new DrawIt.Views.ActivityShow({
      model: activity
    });
    this.addSubview(".activities-wrapper", activityShowView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
