DrawIt.Models.Drawing = Backbone.Model.extend({
  urlRoot: "api/drawings",

  parse: function (payload) {
    if(payload.comments){
      this.comments().set(payload.comments);
      delete payload.comments;
    }
    if(payload.tags){
      this.tags().set(payload.tags);
      delete payload.tags
    }

    return payload
  },

  comments: function () {
    if(!this._comments){
      this._comments =
        new DrawIt.Collections.Comments([],{drawing: this});
    }

    return this._comments
  },

  tags: function () {
    if(!this._tags){
      this._tags =
        new DrawIt.Collections.Tags([],{drawing: this});
    }

    return this._tags
  }
}, {
  modelType: "Drawing"
});
