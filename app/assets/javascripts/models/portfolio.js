DrawIt.Models.Portfolio = Backbone.Model.extend({
  urlRoot: "api/portfolios",

  parse: function (payload) {
    if(payload.comments){
      this.comments().set(payload.comments, {parse: true});
      delete payload.comments;
    }
    if(payload.drawings){
      this.drawings().set(payload.drawings, {parse: true});
      delete payload.drawings;
    }
    if(payload.tags){
      this.tags().set(payload.tags);
      delete payload.tags;
    }
    return payload
  },

  comments: function () {
    if(!this._comments){
      this._comments =
        new DrawIt.Collections.Comments([],{portfolio: this});
    }

    return this._comments
  },

  drawings: function () {
    if(!this._drawings){
      this._drawings =
        new DrawIt.Collections.Drawings([],{portfolio: this});
    }

    return this._drawings
  },

  tags: function () {
    if(!this._tags){
      this._tags =
        new DrawIt.Collections.Tags([],{drawing: this});
    }

    return this._tags
  }

}, {
  modelType: "Portfolio"
});
