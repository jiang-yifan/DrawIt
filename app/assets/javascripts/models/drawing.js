DrawIt.Models.Drawing = Backbone.Model.extend({
  urlRoot: "api/drawings",

  parse: function (payload) {
    if(payload.comments){
      this.comments().set(payload.comments, {parse: true});
      delete payload.comments;
    }
    if(payload.tags){
      this.tags().set(payload.tags);
      delete payload.tags
    }
    if(payload.avatar){
      this.avatar().set(payload.avatar)
      delete payload.avatar
    }
    if (payload.heart) {
      this.heart().set(payload.heart);
      delete payload.heart;
    }
    if (payload.favorite) {
      this.favorite().set(payload.favorite);
      delete payload.favorite;
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
  },

  favorite: function () {
    if(!this._favorite){
      this._favorite =
        new DrawIt.Models.Favorite;
    }

    return this._favorite;
  }
}, {
  modelType: "Drawing"
});
