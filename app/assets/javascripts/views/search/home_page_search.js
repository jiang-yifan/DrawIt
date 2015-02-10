DrawIt.Views.HomePageSearch = Backbone.CompositeView.extend({
  template: JST["search/home_page_search"],
  events:{
    "keyup .search": "search"
  },

  search: function () {
    this.removeSubviews();
    var searchVal = {search: $(event.target).val()};
    if(searchVal.search != ""){
      var view = this;
      $.ajax({
        url: "api/searches",
        method: "get",
        data: searchVal,
        success: function (data) {
          if(data.length != 0){
            $('.search-results').removeClass("hidden")
            data.forEach(view.addResult.bind(view));
          }
        },
      })
    } else {
      $('.search-results').addClass("hidden")
    }
  },

  addResult: function (result) {
    var model = new Backbone.Model(result);
    var searchShowView = new DrawIt.Views.SearchShow({
      model: model
    });
    this.addSubview(".search-results", searchShowView)
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
});
