DrawIt.Models.Portfolio = Backbone.Model.extend({
  urlRoot: "api/portfolios",
  parse: function (payload) {
    if(payload.comments){
      this.comments().set(payload.comments);
      delete payload.comments;
    }
    if(payload.drawings){
      this.drawings().set(payload.drawings);
      delete payload.drawings;
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

}, {
  modelType: "Portfolio"
});
