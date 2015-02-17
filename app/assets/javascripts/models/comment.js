DrawIt.Models.Comment = Backbone.Model.extend({
  urlRoot:"api/comments",

  parse: function (payload) {
    if (payload.heart) {
      this.heart().set(payload.heart);
      delete payload.heart;
    }
    if(payload.avatar){
      this.avatar().set(payload.avatar)
      delete payload.avatar
    }
    return payload;
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
  modelType:"Comment"
});
