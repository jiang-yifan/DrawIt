DrawIt.Collections.Comments = Backbone.Collection.extend({
  url:"api/comments",
  model: DrawIt.Models.Comment,

  initialize: function (model,options) {
    if(options.drawing){
      this.commentedOn = options.drawing;
    }else if(options.portfolio){
      this.commentedOn = options.portfolio;
    }else if(options.main_portfolio){
      this.commentedOn = options.main_portfolio;
    }
  },
});
