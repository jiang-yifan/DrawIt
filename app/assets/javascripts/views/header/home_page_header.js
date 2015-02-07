DrawIt.Views.HomePageHeader = Backbone.View.extend({
  template: JST["header/home_page_header"],
  events: {
    "click .profile": 'navigateProfile',
    "click .site-title": 'navigateRoot'
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

    return this;
  }
});
