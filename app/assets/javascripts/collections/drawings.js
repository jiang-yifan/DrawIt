DrawIt.Collections.Drawings = Backbone.Collection.extend({
  url: function () {
    return "api/users/" + this.userId + "/drawings";
  },
  model: DrawIt.Models.Drawing,

  initialize: function (models, options) {
    this.userId = options.userId;
    if(options.portfolio){
      this.portfolio = options.portfolio;
    }
  }
});
