DrawIt.Views.SearchShow = Backbone.View.extend({
  template: JST['search/search_show'],
  className: "search-result-wrapper group",

  events:{
    'click .search-result-wrapper': 'navigate'
  },

  render: function () {
    var content = this.template({result: this.model});
    this.$el.html(content);
    return this;
  }
})
