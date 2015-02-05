DrawIt.Collections.Drawings = Backbone.Collection.extend({
  url: "api/drawings",
  model: DrawIt.Models.Drawing,

  initialize: function (model, options) {
    if(options){
      if(options.portfolio){
        this.portfolio = options.portfolio;
      }
    }
  },

});
