DrawIt.Views.ActivityShow = Backbone.CompositeView.extend({
  template: JST['activity/activity_show'],
  className: 'activity-wrapper',
  initialize: function () {
    this.parseModel();
    this.listenTo(this.activity, "sync", this.render);
  },

  parseModel: function () {
    var type = this.model.get('activity_type');
    var id = this.model.get('activity_id');
    this.activity = new DrawIt.Models[type]({
      id: id
    })
    this.activity.fetch();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
