DrawIt.Views.Feed = Backbone.CompositeView.extend({
  template: JST["feed/feed_container"],
  events: {
    "click #top-feed": "addTopDrawings",
    "click #my-feed": "addMyFeed"
  },

  initialize: function () {
    this.topDrawings = new DrawIt.Collections.TopDrawings();
    this.myFeed = new DrawIt.Collections.MyFeed();
    this.addTopDrawings();
  },

  addTopDrawings: function () {
    this.removeSubviews();
    this.topDrawings.fetch();
    var topDrawingsView = new DrawIt.Views.DrawingsList({
      collection: this.topDrawings
    });
    this.addSubview(".feed-content-wrapper", topDrawingsView);
  },

  addMyFeed: function () {
    this.removeSubviews();
    this.myFeed.fetch()
    var myFeedView = new DrawIt.Views.ActivitiesList({
      collection: this.myFeed
    });
    this.addSubview(".feed-content-wrapper", myFeedView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this
  }

});
