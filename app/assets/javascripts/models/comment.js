DrawIt.Models.Comment = Backbone.Model.extend({
  urlRoot:"api/comments",

  parse: function (payload) {
    if(payload.avatar){
      this.avatar().set(payload.avatar)
      delete payload.avatar
    }
    return payload
  },

  avatar: function () {
    if (!this._avatar) {
      this._avatar =
        new DrawIt.Models.Avatar();
    }
    return this._avatar;
  }
}, {
  modelType:"Comment"
});
