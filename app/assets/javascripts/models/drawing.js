DrawIt.Models.Drawing = Backbone.Model.extend({
  urlRoot:"api/drawings",
  parse: function (payload) {
    if(payload.comments){
      this.comments().set(payload.comments);
      delete payload.comments;
    }

    return payload
  },

  comments: function () {
    if(!this._comments){
      this._comments =
        new DrawIt.Collections.Comments([],{drawing: this});
    }

    return this._comments
  }
}, {
  modelType: "Drawing"
});
