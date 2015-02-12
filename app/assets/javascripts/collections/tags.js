DrawIt.Collections.Tags = Backbone.Collection.extend({
  url: "api/tags",
  model: DrawIt.Models.Tag,

  initialize: function (model,options) {
    if(options){
      if(options.drawing){
        this.commentedOn = options.drawing;
      }else if(options.portfolio){
        this.commentedOn = options.portfolio;
      }else if(options.main_portfolio){
        this.commentedOn = options.main_portfolio;
      }
    }
  }
});
