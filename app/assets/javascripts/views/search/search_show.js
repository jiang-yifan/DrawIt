DrawIt.Views.SearchShow = Backbone.View.extend({
  template: JST['search/search_show'],

  events:{
    'click .search-result-wrapper': 'navigate'
  },

  navigate: function (event) {
    event.stopPropagation();
    Backbone.history.navigate(
      "users/" + this.model.get("user_id"),
      {trigger:true}
    );
  },

  render: function () {
    var content = this.template({result: this.model});
    this.$el.html(content);
    return this;
  }
})
