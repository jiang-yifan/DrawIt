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
    if (payload.heart) {
      this.heart().set(payload.heart);
      delete payload.heart;
    }
    if(payload.avatar){
      this.avatar().set(payload.avatar)
      delete payload.avatar
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
  },

  avatar: function () {
    if (!this._avatar) {
      this._avatar =
        new DrawIt.Models.Avatar();
    }
    return this._avatar;
  },

  heart: function () {
    if(!this._heart){
      this._heart =
        new DrawIt.Models.Heart;
    }

    return this._heart;
  }

}, {
  modelType: "Portfolio"
});
